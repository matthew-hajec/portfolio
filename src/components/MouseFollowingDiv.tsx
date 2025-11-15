import React from 'react'

type Coordinates = {
  x: number
  y: number
}

type MouseFollowingDivProps = {
  parentRef: React.RefObject<HTMLDivElement | null>
  className?: string
}

export default function MouseFollowingDiv({ parentRef, className }: MouseFollowingDivProps) {
  const [position, setPosition] = React.useState<Coordinates>({ x: 0, y: 0 })
  React.useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // The following logic ensures that the position aligns with the mouse even if the parent div is not at the top-left of the viewport
      if (parentRef && parentRef.current) {
        const rect = parentRef.current.getBoundingClientRect()
        setPosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top
        })
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 pointer-events-none'>
          <div style={{ left: position.x, top: position.y, position: 'absolute', transform: `translate(-50%, -50%)` }} className={className}>
          </div>
    </div>
  ) 
}