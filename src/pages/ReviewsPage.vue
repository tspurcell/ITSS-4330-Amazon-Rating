<template>

  <q-page class="flex justify-center q-pa-lg">


    <q-card flat>
      <q-card-section>
        <q-btn label="Add Review" to="/" color="primary"></q-btn>
      </q-card-section>

      <q-card-section>
        <div class="text-bold text-h5">Top reviews that match your search criteria</div>
      </q-card-section>

      <q-card-section class="row q-gutter-md">
        <q-select dense outlined style="width: 200px" label="Age Range" v-model="age_range" :options="age_range_options"
                  emit-value clearable></q-select>
        <q-select dense outlined style="width: 200px" label="Gender" v-model="gender" :options="gender_options"
                  emit-value clearable></q-select>
        <q-select dense outlined style="width: 200px" label="Preferred Book Length" v-model="book_length"
                  :options="book_length_options" emit-value clearable></q-select>
        <q-select dense outlined style="width: 200px" label="Comfort Level" v-model="comfort_level"
                  :options="comfort_levels" emit-value clearable></q-select>
        <q-select dense outlined style="width: 200px" label="Books Read Per Month" v-model="books_per_month"
                  :options="books_per_month_options" emit-value clearable></q-select>
      </q-card-section>

      <q-card-section>
        <div class="row">
          <div class="col-12 col-md-4">
            <review-card v-for="review in filtered_reviews" :rating="review.rating" :headline="review.headline"
                         :date="review.date"
                         :review_text="review.review_text"></review-card>
          </div>
        </div>
      </q-card-section>

    </q-card>
  </q-page>
</template>

<script>
import ReviewCriteria from "src/composables/ReviewCriteria";
import { computed, ref } from "vue";
import Reviews from "src/composables/Reviews";
import ReviewCard from "components/ReviewCard.vue";

export default {
  name: "ReviewsPage",
  components: { ReviewCard },
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
    const comfort_level = ref(null);
    const books_per_month = ref(null);

    const { reviews } = Reviews();
    const filtered_reviews = computed(() => {
      let result = [...reviews.value];
      if (age_range.value) {
        result = result.filter(x => x.age_range === age_range.value);
      }
      if (gender.value) {
        result = result.filter(x => x.gender === gender.value);
      }
      if (book_length.value) {
        result = result.filter(x => x.book_length === book_length.value);
      }
      if (comfort_level.value) {
        result = result.filter(x => x.comfort_level === comfort_level.value);
      }
      if (books_per_month.value) {
        result = result.filter(x => x.books_per_month === books_per_month.value);
      }
      return result;
    })

    return {
      age_range,
      age_range_options,
      gender,
      gender_options,
      book_length,
      book_length_options,
      comfort_level,
      comfort_levels,
      books_per_month,
      books_per_month_options,

      filtered_reviews
    }
  }
}
</script>

<style scoped>

</style>