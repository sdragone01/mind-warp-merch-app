// component
import Iconify from '../Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
    {
        title: 'dashboard',
        path: '/home',
        icon: getIcon('eva:pie-chart-2-fill'),
    },
    {
        title: 'schedule',
        path: '/schedule',
        icon: getIcon('eva:people-fill'),
    },
    {
        title: 'artwork',
        path: '/artwork',
        icon: getIcon('eva:shopping-bag-fill'),
    },
    {
        title: 'jobs',
        path: '/jobs',
        icon: getIcon('eva:file-text-fill'),
    },

];

export default navConfig;