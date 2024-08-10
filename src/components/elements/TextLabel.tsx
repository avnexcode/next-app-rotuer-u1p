type TextLabelProps = {
  children: React.ReactNode
}

export default function TextLabel({ children }: TextLabelProps) {
  return <span>{children}</span>
}
