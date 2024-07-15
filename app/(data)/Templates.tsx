export default[
    {
        name:'Blog Title',
        desc:'An AI tool that generate blog title depends on your blog information',
        category:'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/3959/3959542.png',
        aiPrompt:'Give me 5 blog topic idea in bullet format based on given nich topic and give result in Rich text editor format',
        slug:'generate-blog-title',
        form:[
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',
            }

        ]
    },
    {
        name:'Blog Content',
        desc:'An AI tool that serves as your personal blog post title',
        category:'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/3959/3959542.png',
        slug:'blog-content-generation',
        aiPrompt:'Generate Blog Content based on topic and ouline in the blog',
        form:[
            {
                label:'Enter your blog topic',
                field:'input',
                name:'topic',
                required:true
            },
            {
                label:'Enter blog Outline here',
                field:'textarea',
                name:'outline'

            }
        ]
    },
    {
        name:'Blog Topic Ideas',
        desc:'An AI took that serves as your pesonal blog post title generator',
        category:'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/3959/3959542.png',
        slug:'blog-topic-idea',
        aiPrompt:'Generate top 5 Blog Topic Ideas in bullet point',
        form:[
            {
                label:'Enter your Niche',
                field:'input',
                name:'niche',
                required:true
            },
        ]
        
    },{
        name:'Youtube SEO Title',
        desc:'An AI tool that serves as your pesonal blog post title',
        category:'Youtube Tools',
        icon:'https://cdn-icons-png.flaticon.com/128/3670/3670147.png',
        slug:'youtube-seo-title',
        aiPrompt:'Give me Best SEO optimized high ranked 5 title ideas',
        form:[
            {
                label:'Enter your youtube video topic keywords',
                field:'input',
                name:'keywords',
                required:true
            },
            {
                label:'Enter youtube description Outline here',
                field:'textarea',
                name:'outline'
            }
        ]
    },
    {
        name:'Youtube Description',
        desc:'An AI that serves as your personal blog post title',
        category:'Youtube Tool',
        icon:'https://cdn-icons-png.flaticon.com/128/3670/3670147.png',
        slug:'youtube-description',
        aiPrompt:'Generate Youtube description with emoji under 4-5 words',
        form:[
            {
                label:'Enter your blog topic/title',
                field:'input',
                name:'topic',
                required:true
            },
            {
                label:'Enter youtube Outline here',
                field:'textarea',
                name:'outline'

            }
        ]
    },
    {
        name:'Youtube Tags',
        desc:'An AI tool that serves as your personal blog post title',
        category:'Youtube Tool',
        icon:'https://cdn-icons-png.flaticon.com/128/3670/3670147.png',
        slug:'youtube-tag',

        aiPrompt:'Generate 10 Youtube tags in bullet point based on the description',
        form:[
            {
                label:'Enter your youtube title',
                field:'input',
                name:'title',
                required:true
            }
        ]
    },

]