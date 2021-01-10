<template>
    <div class="home">
        <div class="timeline">
            <h2>Home</h2>

            <Post />
        </div>
        <div class="sidebar">
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Mollitia numquam laboriosam dolorum expedita praesentium sint
                omnis autem. Unde blanditiis, omnis nesciunt quam voluptate
                voluptatem quod dolor optio quasi ducimus itaque!
            </p>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Post from '@/components/Post'

export default {
    name: 'Home',
    components: {
        Post,
    },
}
</script>

<style lang="scss">
.home {
    max-width: 605px;
    margin-left: auto;
    margin-right: auto;

    @media screen and (min-width: 876px) {
        max-width: none;
        display: grid;
        grid-template-columns: 1fr 295px;
        grid-gap: 30px;
    }

    .sidebar {
        display: none;

        @media screen and (min-width: 876px) {
            display: block;
        }
    }
}
</style>
