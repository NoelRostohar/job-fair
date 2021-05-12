import profileImage from '../ui/assets/images/profile-image.png';
import cardImage from '../ui/assets/images/card-image-1.png';
import cardBookmark from '../ui/assets/images/card-bookmark.png';

export const currentUser = {
  handle: 'Ars Futura',
  name: 'Ivan Božić',
  profileImage,
  categories: ['Android', 'Design', 'General', 'iOS', 'Operations', 'QA', 'Random', 'Web'],
};

export const cards = [
  {
    id: 1,
    bannerImage: cardImage,
    bookmarkImage: cardBookmark,
    title: 'Klim Type Foundry · Signifier',
    link: 'https://klim.co.nz/retail-fonts/signifier/',
    description:
      "Hate waiting at traffic lights? Yeah, me too. Good thing the Netherlands has smarter traffic lights to make sure that happens as little as possible. It's ama...",
    categories: [
      {
        icon: 'folder',
        category: 'Design',
      },
      {
        category: 'typography',
      },
      {
        category: 'inspiration',
      },
      {
        category: 'design',
      },
    ],
    likes: 2,
    comments: 4,
  },
  {
    id: 2,
    // bannerImage: cardImage,
    bookmarkImage: cardBookmark,
    title: 'Klim Type Foundry · Signifier',
    link: 'https://klim.co.nz/retail-fonts/signifier/',
    description:
      "Hate waiting at traffic lights? Yeah, me too. Good thing the Netherlands has smarter traffic lights to make sure that happens as little as possible. It's ama...",
    categories: [
      {
        icon: 'folder',
        category: 'Design',
      },
      {
        category: 'typography',
      },
      {
        category: 'inspiration',
      },
      {
        category: 'design',
      },
    ],
    likes: 2,
    comments: 4,
  },
];
