import { Button } from '@wordpress/components';

const Button = ({ children, icon }) => {
    return <Button icon={icon} className="phoenix-components-btn">{children}</Button>
}

export default Button;