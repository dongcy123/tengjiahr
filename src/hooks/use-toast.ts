import { ref, reactive, readonly } from 'vue'

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

export interface ToastProps {
  id?: string
  title?: string
  description?: string
  action?: any
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export type ToasterToast = ToastProps & {
  id: string
  title?: string
  description?: string
  action?: any
}

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    removeToast(toastId)
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

// State management
const state = reactive<{ toasts: ToasterToast[] }>({ toasts: [] })

const addToast = (toast: ToasterToast) => {
  state.toasts = [toast, ...state.toasts].slice(0, TOAST_LIMIT)
}

const updateToast = (toast: Partial<ToasterToast>) => {
  state.toasts = state.toasts.map((t) =>
    t.id === toast.id ? { ...t, ...toast } : t
  )
}

const dismissToast = (toastId?: string) => {
  if (toastId) {
    addToRemoveQueue(toastId)
  } else {
    state.toasts.forEach((toast) => {
      addToRemoveQueue(toast.id)
    })
  }

  state.toasts = state.toasts.map((t) =>
    t.id === toastId || toastId === undefined
      ? {
          ...t,
          open: false,
        }
      : t
  )
}

const removeToast = (toastId?: string) => {
  if (toastId === undefined) {
    state.toasts = []
  } else {
    state.toasts = state.toasts.filter((t) => t.id !== toastId)
  }
}

type Toast = Omit<ToasterToast, "id">

function toast({ ...props }: Toast) {
  const id = genId()

  const update = (props: ToasterToast) =>
    updateToast({ ...props, id })
  
  const dismiss = () => dismissToast(id)

  addToast({
    ...props,
    id,
    open: true,
    onOpenChange: (open: boolean) => {
      if (!open) dismiss()
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

export function useToast() {
  return {
    ...readonly(state),
    toast,
    dismiss: dismissToast,
  }
}

export { toast }
