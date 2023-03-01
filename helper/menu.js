import { HomeOutlined, BookFilled } from "@ant-design/icons";

export const menuItems = [
  {
    key: 1,
    label: "Home",
    link: "/#mainpage",
  },

  {
    key: 2,
    label: "About us",

    link: "/#mainpage",
  },

  {
    key: 3,
    label: "services",

    link: "/#mainpage",
    children: [
      {
        key: 21,
        label: "Translation",

        link: "/#mainpage",
      },
      {
        key: 21,
        label: "Transcretion",

        link: "/#mainpage",
      },
      {
        key: 21,
        label: "content_copywriting",

        link: "/#mainpage",
      },
      {
        key: 21,
        label: "Cultural consultancy",

        link: "/#mainpage",
      },
      {
        key: 21,
        label: "content production",

        link: "/#mainpage",
      },
    ],
  },
  {
    key: 4,
    label: "Clients",

    link: "/#mainpage",
  },
  {
    key: 5,
    label: "join Us / careers",

    link: "/#mainpage",
  },
  {
    key: 6,
    label: "Our Block",

    link: "/#mainpage",
  },
  {
    key: 6,
    label: "Partners",

    link: "/#mainpage",
  },
];
