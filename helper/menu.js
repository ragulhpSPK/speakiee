import { HomeOutlined, BookFilled } from "@ant-design/icons";

export const menuItems = [
  {
    key: 1,
    label: "About us",

    link: "/about",
  },

  {
    key: 2,
    label: "services",

    link: "/#mainpage",
    children: [
      {
        key: 21,
        label: "Front End Developer",

        link: "/#mainpage",
      },
      {
        key: 21,
        label: "Backend developer",

        link: "/#mainpage",
      },
      {
        key: 21,
        label: "Full stact developer",

        link: "/#mainpage",
      },
      {
        key: 21,
        label: "Mobile App developer",

        link: "/#mainpage",
      },
      {
        key: 21,
        label: "Ios developer",

        link: "/#mainpage",
      },
    ],
  },
  {
    key: 3,
    label: "Clients",

    link: "/#mainpage",
  },
  {
    key: 4,
    label: "join Us / careers",

    link: "/#mainpage",
  },
  {
    key: 5,
    label: "Our Block",

    link: "/#mainpage",
  },
  {
    key: 6,
    label: "Partners",

    link: "/#mainpage",
  },

  {
    key: 7,
    label: "contact us",
    link: "/contact",
  },
];
