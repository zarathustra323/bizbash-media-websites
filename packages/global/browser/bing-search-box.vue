<template>
  <div class="bing-search">
    <form
      class="bing-search__form"
      @submit="search"
    >
      <input
        v-model="term"
        class="form-control bing-search__input"
        type="text"
        placeholder="Search"
        autofocus
      >
      <button type="submit" class="btn btn-primary bing-search__button">
        <icon-search :modifiers="iconModifiers" />
      </button>
    </form>
    <div>
      <p
        v-if="loading"
        class="bing-loading"
      >
        Loading results...
      </p>
      <p
        v-else-if="error"
        class="bing-error"
      >
        An error occurred. Please try again later!
      </p>
      <p
        v-else-if="!pages.length && hasSearched"
        class="bing-error"
      >
        No results found.
      </p>
      <div v-else>
        <div class="node-list node-list--bing-search">
          <div
            v-for="page in pages"
            :key="page.url"
            class="node-list__contents"
          >
            <div class="node-list__node">
              <div class="node node--bing-search">
                <div class="node__contents">
                  <h5 class="node__title">
                    <a :href="page.url">{{ page.name }}</a>
                  </h5>
                  <div class="node__description">
                    {{ page.snippet }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconSearch from '@parameter1/base-cms-marko-web-icons/browser/search.vue';

export default {
  components: {
    IconSearch,
  },
  props: {
    domain: {
      type: String,
      required: true,
    },
    apiKey: {
      type: String,
      required: true,
    },
    mkt: {
      type: String,
      default: 'en-us',
    },
    limit: {
      type: Number,
      default: 50,
    },
  },
  data() {
    return {
      loading: false,
      hasSearched: false,
      error: false,
      pages: [],
      term: '',
      iconModifiers: [],
    };
  },
  methods: {
    async search(event) {
      event.preventDefault();
      this.loading = true;
      this.error = false;
      this.pages = [];

      try {
        const { term, domain, apiKey } = this;
        const { mkt, limit: count } = this;
        const payload = {
          q: `${term} site:${domain}`,
          count,
          offset: 0,
          mkt,
        };
        const query = q => Object.keys(q).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(q[k])}`).join('&');

        const url = `https://api.bing.microsoft.com/v7.0/search?${query(payload)}`;
        const headers = { 'Ocp-Apim-Subscription-Key': apiKey };

        const res = await fetch(url, { headers });
        const json = await res.json();

        this.pages = json && json.webPages && json.webPages.value ? json.webPages.value : [];
      } catch (e) {
        this.error = e.message;
      } finally {
        this.loading = false;
        this.hasSearched = true;
      }
    },
  },
};
</script>
