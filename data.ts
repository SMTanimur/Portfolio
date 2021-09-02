import { RiComputerLine } from 'react-icons/ri';
import { FaServer, FaToolbox } from 'react-icons/fa';
import { MdDeveloperMode } from 'react-icons/md';
import { BsCircleFill } from 'react-icons/bs';
import { IService, ISkill } from './type';

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: 'Frontend Development',
    about:
      'I can build a beautiful scalable SPA using <b>HTML</b>,<b>CSS</b>, <b>REACT JS</b> and <b>NEXT JS</b>',
  },
  {
    Icon: FaServer,
    title: 'Backend Development',
    about:
      'I can Handle Database,Server,API using <b>Express js</b> and other popular Frameworks',
  },
  {
    Icon: MdDeveloperMode,
    title: 'Competitive coder',
    about: 'A daily problem solver in <b>HackerRank</b> and <b>Leet code</b>',
  },
  {
    Icon: FaToolbox,
    title: 'Knowing Dev tool',
    about:
      'Redux-React,Framer Motion,tailwind css,Bootstrap,React-hook,React using category all other Framework',
  },
];

export const languages: ISkill[] = [
  {
    name: 'java Script',
    level: '87%',
    Icon: BsCircleFill,
  },
  {
    name: 'React-Native',
    level: '70%',
    Icon: BsCircleFill,
  },
  {
    name: 'React',
    level: '80%',
    Icon: BsCircleFill,
  },
  {
    name: 'Next JS',
    level: '85%',
    Icon: BsCircleFill,
  },
  {
    name: 'Tailwind',
    level: '90%',
    Icon: BsCircleFill,
  },
  {
    name: 'Bootstrap',
    level: '60%',
    Icon: BsCircleFill,
  },
];

export const Tool: ISkill[] = [
  {
    name: 'Figma',
    level: '80%',
    Icon: BsCircleFill,
  },
  {
    name: 'PhotoShop',
    level: '30%',
    Icon: BsCircleFill,
  },
  {
    name: 'Framer',
    level: '50%',
    Icon: BsCircleFill,
  },
];
