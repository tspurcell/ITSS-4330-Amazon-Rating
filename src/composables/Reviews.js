import { ref } from "vue";

const reviews = ref([
    {
        rating: 4,
        headline: `It's the best`,
        review_text: 'I purchased this book for my teenage daughter who is the biggest Taylor Swift fan ever! We absolutely LOVE it!! The words are precious and the illustrations are so beautiful! Our favorite page was the one about The Best Day because we lovingly refer to that as our song! This book would make a perfect gift for the Swiftie in your life!',
        date: new Date(),
        age_range: 'Under 20',
        gender: 'Male',
        book_length: 'Novella (short)',
        comfort_level: 1,
        books_per_month: '0-2'
    },
    {
        rating: 3,
        headline: `It's the best`,
        review_text: 'I purchased this book for my teenage daughter who is the biggest Taylor Swift fan ever! We absolutely LOVE it!! The words are precious and the illustrations are so beautiful! Our favorite page was the one about The Best Day because we lovingly refer to that as our song! This book would make a perfect gift for the Swiftie in your life!',
        date: new Date(),
        age_range: 'Under 20',
        gender: 'Female',
        book_length: 'Novella (short)',
        comfort_level: 1,
        books_per_month: '0-2'
    }
]);

export default ()=> {
    return {
        reviews
    }
}
