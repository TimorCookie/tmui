import  React, {FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import classnames from 'classnames';




export type ButtonSize = 'lg' | 'sm';
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';
// export enum ButtonSize{
//     Large = 'lg',
//     Small = 'sm'
// }
// export enum ButtonType {
//     Primary = 'primary',
//     Default = 'default',
//     Danger = 'danger',
//     Link = 'link'
// }
interface BaseButtonProps {
    size?: ButtonSize;
    btnType?: ButtonType;
    disabled?: boolean;
    href?: string;
    className?:string;
    children: React.ReactNode
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>


export const Button: FC<ButtonProps> = (props) => {
    const { size, btnType, disabled, href, className, children, ...restProps} = props

    const classes = classnames('btn', className, {
        [`btn-${btnType}`]:btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType==='link')&&disabled
    })

    if(btnType==='link'&&href) {
        return (
            <a href={href} className={classes} {...restProps}>
                {children}
            </a>
        )
    } else {
        return (
            <button className={classes} {...restProps} disabled={disabled}>
                {children}
            </button>
        )
    }
}


Button.defaultProps = {
    disabled: false,
    btnType: 'default'
}



export default Button;