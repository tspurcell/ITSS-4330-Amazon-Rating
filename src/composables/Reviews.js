import { ref } from "vue";

const reviews = ref([
    {
        rating: 4,
        headline: 'Dumas classic is a great swashbuckling story',
        review_text: 'Alexandre Dumas 1844 novel The Three Musketeers is the most well-known swashbuckling novel in the genre, and with good reason. This well-deserved classic is a lot of fun, and the adventures of dArtagnan, Athos, Porthos, and Aramis are very enjoyable. There are a couple of small issues I have with the story, but its well worth reading.',
        date: new Date(),
        age_range: '20-35',
        gender: 'Male',
        book_length: 'Epic Novel (long)',
        comfort_level: 1,
        books_per_month: '6+'
    },
    {
        rating: 2,
        headline: 'Vocabulary too advanced to hold childrens attention',
        review_text: 'I bought this classic novel on cd thinking it would hold the interest of my 2 grade school boys, who enjoy books on cd while driving to and from school. They did not like the narrators snobby french accent nor could they understand many of the words. This is a great cd for high school or adults but not children. A bust for us.',
        date: new Date(),
        age_range: '50+',
        gender: 'Male',
        book_length: 'Novel (medium)',
        comfort_level: 2,
        books_per_month: '3-5'
    },
    {
        rating: 1,
        headline: 'Too thick',
        review_text: 'Super  thick, impossible to take on plane trips.  Sent it back!',
        date: new Date(),
        age_range: '36-49',
        gender: 'Female',
        book_length: 'Novella (short)',
        comfort_level: 1,
        books_per_month: '0-2'
    },
    {
        rating: 2,
        headline: 'I know this is a classic and I like to read classics',
        review_text: 'I know this is a classic and I like to read classics, but this is really silly. People fighting and risking their lives without even knowing why. No explanations for anything. Seems like it was written for a preteen audience. I must be missing something. Read 2/3 and couldnt stand it and put it away. I can read long books but this lost my interest.',
        date: new Date(),
        age_range: '50+',
        gender: 'Female',
        book_length: 'Epic Novel (long)',
        comfort_level: 3,
        books_per_month: '0-2'
    },
    {
        rating: 3,
        headline: 'The Three Musketeers',
        review_text: 'nice enough look to the book ..the story was liked by another reader...story is ok .. with movies or a tv trilogy or w/e the video story could very well have been made better than this story version from long ago.',
        date: new Date(),
        age_range: 'Under 20',
        gender: 'Male',
        book_length: 'Novella (short)',
        comfort_level: 2,
        books_per_month: '3-5'
     },
    {
        rating: 3,
        headline: 'A surprise',
        review_text: 'I had never read this book before, but felt that it would be of interest since I believed Dumas to be a very good writer. I think the dullness of it must be the translation. I finally just gave up after reading a good two-thirds of it. It was just too archaic, too dull, too slow for me. Surely it would be more interesting in the original language.',
        date: new Date(),
        age_range: '36-49',
        gender: 'Male',
        book_length: 'Novel (medium)',
        comfort_level: 3,
        books_per_month: '6+'
     },
    {
        rating: 5,
        headline: 'Beautiful book!',
        review_text: 'Book is in perfect condition and was a great price! I am very happy to add this to my collection! Dumas is one of my favorite authors.',
        date: new Date(),
        age_range: '20-35',
        gender: 'Female',
        book_length: 'Epic Novel (long)',
        comfort_level: 1,
        books_per_month: '6+'
    },
    {
        rating: 5,
        headline: 'A fun satirical romp in France',
        review_text: 'In a world of spies and romance, comes a young man naive to the world who has to learn quickly that a sword solves all questions. Alexander Dumas brings a historical fiction following the high adventures of a young man that learns the ways of the world. The characters are over the top, greater the life to a satirical point. Some of the events happened its up to you to figure those out if you want.',
        date: new Date(),
        age_range: 'Under 20',
        gender: 'Female',
        book_length: 'Novel (medium)',
        comfort_level: 2,
        books_per_month: '3-5'
    },
    {
        rating: 1,
        headline: 'This translation is a real slog',
        review_text: 'Dont waste your time on this edition. The translation is based on a translation originally done a hundred years ago. It is a literal translation and preserves the French syntax. I found myself reading and re-reading paragraphs multiple times to follow the meaning, and missed a lot of the humor',
        date: new Date(),
        age_range: '36-49',
        gender: 'Male',
        book_length: 'Epic Novel (long)',
        comfort_level: 3,
        books_per_month: '0-2'
    },
    {
        rating: 4,
        headline: 'So Funny!',
        review_text: 'Wow. What a fun book. Definitely fun to listen to the audio book. It’s hilarious and they definitely do not like prostitutes.',
        date: new Date(),
        age_range: '20-35',
        gender: 'Female',
        book_length: 'Novella (short)',
        comfort_level: 3,
        books_per_month: '6+'
    },
]);

export default ()=> {
    return {
        reviews
    }
}
