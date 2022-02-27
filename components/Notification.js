import { motion } from "framer-motion"

const variants = {
    open: { opacity: 0.8, x: 0 },
    closed: { opacity: 0, x: 200 },
}

export default function Notification(props) {


    return (
        <motion.div
            className="notification"
            variants={variants}
            animate={props.isDisplayed ? 'open' : 'closed'}
        >
            Hello there! 👋<br/>
            This site is currently not optimised for screen-sizes outside of 320-375px and &ge; 1030px wide
        </motion.div>
    )

}