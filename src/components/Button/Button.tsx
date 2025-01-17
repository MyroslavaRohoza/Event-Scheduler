
const Button = ({children,buttonType='button'}) => {
  return (
    <button type={buttonType}>{children}</button>
  )
}

export default Button