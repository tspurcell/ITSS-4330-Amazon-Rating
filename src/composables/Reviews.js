import { ref } from "vue";

const reviews = ref([
    {
        rating: 4,
        headline: `Dumas' classic is a great swashbuckling story`,
        review_text: 'Alexandre Dumas 1844 novel The Three Musketeers is the most well-known swashbuckling novel in the genre, and with good reason. This well-deserved classic is a lot of fun, and the adventures of dArtagnan, Athos, Porthos, and Aramis are very enjoyable. There are a couple of small issues I have with the story, but it's well worth reading.',
        date: new Date(),
        age_range: '20-35',
        gender: 'Male',
        book_length: 'Epic Novel (long)',
        comfort_level: 1,
        books_per_month: '6+'
    },
    {
        rating: 2,
        headline: `Vocabulary too advanced to hold childrens attention`,
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
        headline: `Too thick`,
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
        headline: `I know this is a classic and I like to read classics`,
        review_text: 'I know this is a classic and I like to read classics, but this is really silly. People fighting and risking their lives without even knowing why. No explanations for anything. Seems like it was written for a preteen audience. I must be missing something. Read 2/3 and couldnt stand it and put it away. I can read long books but this lost my interest.',
        date: new Date(),
        age_range: '50+',
        gender: 'Female',
        book_length: 'Epic Novel (long)',
        comfort_level: 3,
        books_per_month: '0-2'
    },
]);

export default ()=> {
    return {
        reviews
    }
}
