import { ref } from "vue";

const age_range_options = ref([
    { label: 'Under 20', value: 'Under 20' },
    { label: '20-35', value: '20-35' },
    { label: '36-49', value: '36-49' },
    { label: '50+', value: '50+' },
])

const gender_options = ref([
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
    { label: 'Prefer not to say', value: 'Prefer not to say' }
])

const book_length_options = ref([
    { label: 'Novella (short)', value: 'Novella (short)' },
    { label: 'Novel (medium)', value: 'Novel (medium)' },
    { label: 'Epic Novel (long)', value: 'Epic Novel (long)' },
    { label: 'No Preference', value: 'No Preference' }
])

const comfort_levels = ref([
    { value: 1, label: 'PG' },
    { value: 2, label: 'PG-13' },
    { value: 3, label: 'NC-17' },
])

const books_per_month_options = ref([
    { value: '0-2', label: '0-2' },
    { value: '3-5', label: '3-5' },
    { value: '6+', label: '6+' },
])

export default ()=>{
    return {
        age_range_options,
        gender_options,
        book_length_options,
        comfort_levels,
        books_per_month_options
    }
}