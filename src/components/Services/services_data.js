import online_coaching from '../../images/online-coaching.jpg';
import coaching from '../../images/coaching.jpg';
import nutrition from '../../images/nutrition.jpg';
import training from '../../images/training.jpg';

const programs_data = [
  {
    type: 'service',
    title: 'Online Coaching',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus.',
    image: `${online_coaching}`,
    link: '#',
  },
  {
    type: 'service',
    title: '1 on 1 coaching',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus.',
    image: `${coaching}`,
    link: '#',
  },
  {
    type: 'service',
    title: 'Custom nutriotion plan',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus.',
    image: `${nutrition}`,
    link: '#',
  },
  {
    type: 'service',
    title: 'personal training programs',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus.',
    image: `${training}`,
    link: '#',
  },
];

export default programs_data;
