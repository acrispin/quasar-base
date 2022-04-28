<template>
    <q-page class="flex flex-center">
        <div>
            <q-btn color="primary" :label="$t('button.label')" />
            <p>{{ $t('message.sample') }}</p>
            <span v-html="content"></span>
        </div>
        <p>{{ $t('success') }}</p>
        <div class="other">
            <ul>
                <li>DEV: {{ dev }}</li>
                <li>PROD: {{ prod }}</li>
                <li>DEBUGGING: {{ debugging }}</li>
                <li>CLIENT: {{ client }}</li>
                <li>SERVER: {{ server }}</li>
                <li>MODE: {{ mode }}</li>
                <li>NODE_ENV: {{ node_env }}</li>
                <li>API_URL: {{ api_url }}</li>
            </ul>
        </div>
    </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "IndexPage",
    data() {
        return {
            content: this.$t('message.content.sample')
        }
    },
    computed: {
        api_url() {
            return process.env.API_URL;
        },
        dev() {
            return process.env.DEV;
        },
        prod() {
            return process.env.PROD;
        },
        debugging() {
            return process.env.DEBUGGING;
        },
        client() {
            return process.env.CLIENT;
        },
        server() {
            return process.env.SERVER;
        },
        mode() {
            return process.env.MODE;
        },
        node_env() {
            return process.env.NODE_ENV;
        },
    },
});
</script>
