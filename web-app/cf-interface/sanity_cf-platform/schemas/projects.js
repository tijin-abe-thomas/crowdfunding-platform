export default{
    name: 'projects',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'images',
            title: 'Project images',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            }
        },

        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },

        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },

        {
            name: 'cost',
            title: 'Cost',
            type: 'number',
        },

        {
            name: 'details',
            title: 'Project Details',
            type: 'string',
        },


    ]
}