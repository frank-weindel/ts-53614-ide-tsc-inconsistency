export function createWebGLContext(
  canvas: HTMLCanvasElement | OffscreenCanvas,
): WebGLRenderingContext | null {
  return (
    canvas.getContext('webgl')
  )
}
