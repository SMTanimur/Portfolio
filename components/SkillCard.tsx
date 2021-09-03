import React, { FunctionComponent } from 'react';
import { ISkill } from '../type';
import { motion } from 'framer-motion';

const SkillCard: FunctionComponent<{ data: ISkill }> = ({
  data: { Icon, level, name },
}) => {
  const bar_width = `${level}`;
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: bar_width,
      transition: {
        duration: 0.4,
        type: 'spring',
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <div className='text-white bg-gray-300 my-2 rounded-full'>
      <motion.div
        className='px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-green-500 to-blue-600'
        style={{ width: level }}
        variants={variants}
        initial='initial'
        animate='animate'
      >
        <Icon className='mr-3' />
        {name}
      </motion.div>
    </div>
  );
};

export default SkillCard;
