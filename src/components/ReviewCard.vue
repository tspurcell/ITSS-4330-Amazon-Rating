<template>

  <q-card flat>
    <q-card-section>
      <div class="row items-center q-gutter-md">
        <q-rating :model-value="rating" size="md"></q-rating>
        <div class="text-bold">{{ headline }}</div>
      </div>
      <div class="text-caption">Reviewed in the United States on {{ date.toLocaleString() }}</div>
      <div class="text-orange text-bold">Verified Purchase</div>
      <div>{{ review_text }}</div>
    </q-card-section>
  </q-card>
</template>

<script>
import { computed } from "vue";

export default {
  name: "ReviewCard",
  props: {
    rating: Number,
    headline: String,
    date: String,
    review_text: String
  }
}
</script>

<style scoped>

</style>