<template>
  <div class="bg-blue-2 q-pa-lg">
    <div class="flex flex-center q-gutter-md">
      <q-icon name="account_circle" size="md"></q-icon>
      <div>Group 1 - ITSS 4330.002</div>
      <a href="#">Edit</a>
    </div>
  </div>
  <q-page class="flex flex-center q-pa-lg">
    <q-card flat>
      <q-card-section class="q-gutter-md">
        <div class="text-bold text-h5">Create Review</div>

        <div class="flex q-gutter-md items-center">
          <img height="100" src="https://m.media-amazon.com/images/I/61ic+1QdJWL._AC_UL480_FMwebp_QL65_.jpg"/>
          <div>
            Perhaps the greatest “cloak and sword” story ever written,
            The Three Musketeers, first published ion 1844,
            is a tale for all time.
          </div>
        </div>

        <q-separator></q-separator>

        <div class="text-bold">What is your age range?</div>
        <q-btn-toggle
            v-model="age_range"
            toggle-color="primary"
            :options="age_range_options"
        />

        <div class="text-bold">What is your gender?</div>
        <q-btn-toggle
            v-model="gender"
            toggle-color="primary"
            :options="gender_options"
        />

        <div class="text-bold">What is your preferred book length?</div>
        <q-btn-toggle
            v-model="book_length"
            toggle-color="primary"
            :options="book_length_options"
        />

        <div class="text-bold">What is your highest comfort level?</div>
        <q-btn-toggle
            v-model="highest_comfort_level"
            toggle-color="primary"
            :options="comfort_levels"
        />

        <div class="text-bold">How many books do you read per month?</div>
        <q-btn-toggle
            v-model="books_per_month"
            toggle-color="primary"
            :options="books_per_month_options"
        />

        <div>
          <div class="text-bold">Overall Rating</div>
          <q-rating v-model="rating" size="lg"></q-rating>
        </div>

        <q-separator></q-separator>

        <div class="text-bold">Add a headline</div>
        <q-input placeholder="What's most important to know?" v-model="headline"></q-input>

        <div class="text-bold">Add a photo or video</div>
        <div class="text-caption">Shoppers find images and videos more helpful than text alone</div>
        <q-card class="inline-block q-pa-lg" flat style="border: 2px grey dashed">
          <q-icon name="add" size="lg"></q-icon>
        </q-card>

        <q-separator></q-separator>

        <div class="text-bold">Add a written review</div>
        <q-input v-model="review" type="textarea" placeholder="What did you like or dislike?"></q-input>

      </q-card-section>

      <q-card-actions>
        <q-space></q-space>
        <q-btn to="/reviews" label="Back to reviews"></q-btn>
        <q-btn @click="submit" color="secondary" text-color="black" no-caps label="Submit"></q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import ReviewCriteria from "src/composables/ReviewCriteria";
import Reviews from "src/composables/Reviews";
import { useRouter } from "vue-router";

export default defineComponent({
  name: 'IndexPage',
  setup() {

    const {
      age_range_options,
      gender_options,
      book_length_options,
      comfort_levels,
      books_per_month_options
    } = ReviewCriteria();

    const age_range = ref(null);
    const gender = ref(null);
    const book_length = ref(null);
    const highest_comfort_level = ref(null);
    const books_per_month = ref(null);
    const rating = ref(2);
    const headline = ref(null);
    const review = ref(null);

    const {reviews} = Reviews();
    const router = useRouter();
    const submit = ()=> {
      reviews.value.push({
        rating: rating.value,
        headline: headline.value,
        review_text: review.value,
        date: new Date(),
        age_range: age_range.value,
        gender: gender.value,
        book_length: book_length.value,
        comfort_level: highest_comfort_level.value,
        books_per_month: books_per_month.value
      })
      router.push('/reviews')
    }

    return {
      age_range,
      age_range_options,
      gender,
      gender_options,
      book_length,
      book_length_options,
      highest_comfort_level,
      comfort_levels,
      books_per_month,
      books_per_month_options,
      rating,
      headline,
      review,
      submit
    }
  }
})
</script>
