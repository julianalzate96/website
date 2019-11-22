export default {
  name: "background",
  title: "Background",
  type: "document",
  fields: [
    {
        name:'title',
        title:'Home',
        type:'string'
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "alt",
      title: "Alternative text",
      type: "string",
    },
    {
      name:'profile',
      title:'Profile',
      type:'image'
    },
    {
      name:'profileAlt',
      title:'Profile Alt',
      type:'text'
    }
  ],
}
