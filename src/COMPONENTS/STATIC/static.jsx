import illustration1 from '../IMAGES/illustration-features-tab-1.svg'
import illustration2 from '../IMAGES/illustration-features-tab-2.svg'
import illustration3 from '../IMAGES/illustration-features-tab-3.svg'
import arrow from '../IMAGES/icon-arrow.svg'
import arrow2 from '../IMAGES/icon-arrow2.svg'


const questions = [
    {
        id:1,
        question:'What is Bookmark?',
        arrow:arrow,
        arrow2:arrow2,
        answer:`  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
        justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.`,
     
    },
    {
        id:2,
        question:'How can I request a new browser?',
        arrow:arrow,
        arrow2:arrow2,
        answer:` Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
        Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
        ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
        Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.`,
     
    },
    {
        id:3,
        question:'Is there a mobile app?',
        arrow:arrow,
        arrow2:arrow2,
        answer:`Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
        urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
        sollicitudin ex et ultricies bibendum.`,
     
    },
    {
        id:4,
        question:'  What about other Chromium browsers?',
        arrow:arrow,
        arrow2:arrow2,
        answer:`Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
        vitae neque eget nisl gravida pellentesque non ut velit.`,
     
    }
]
const features = [
    {
        id:1,
        title:'Bookmark in one click',
        img:illustration1,
        description:' Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
        info:'More Info',
        button:'Simple Bookmarking'

    },
    {
        id:2,
        title:'Intelligent search',
        img:illustration2,
       description: `Our powerful search feature will help you find saved
         sites in no time at all.No need to trawl through all of your bookmarks.`,
        info:'More Info',
        button:'Speedy Searching'
    },
    {
        id:3,
        title:'Share your bookmarks',
        img:illustration3,
        description:`Easily share your bookmarks and collections with others. Create a shareable 
        link that you can send at the click of a button.`,
        info:'More Info',
        button:'Easy Sharing'
    }
]

export { features, questions }

// npm install -D tailwindcss postcss autoprefixer
// npx tailwindcss init -p