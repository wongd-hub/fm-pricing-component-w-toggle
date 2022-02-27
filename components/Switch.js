import { motion } from 'framer-motion'

export default function Switch({ freq, variants, ...props }) {

    return (
      <motion.div animate className='switch' {...props}>
        <motion.div animate={freq === 'monthly' ? 'monthly' : 'annually'} variants={variants} />
      </motion.div>
    );
  }