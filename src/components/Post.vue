<template>
    <div class="post">
        <header class="post-header">
            <div class="post-header-author">
                <Avatar :size="40" />
                <div class="author">
                    <custom-text>Taha Zeybek</custom-text>
                    <custom-text>İstanbul</custom-text>
                </div>
            </div>
            <div class="post-header-more">
                <img src="../icons/more.png" height="40" width="40" alt="" />
            </div>
        </header>
        <div class="post-media">
            <img
                src="https://mediatrend.mediamarkt.com.tr/wp-content/uploads/2017/02/2017_subat_03.jpg"
                alt=""
            />
        </div>
    </div>
</template>

<script>
import Avatar from '@/components/avatar'
import CustomText from './CustomText'
export default {
    name: 'Post',
    components: {
        Avatar,
        CustomText,
    },
}
</script>
CustomText

<style lang="scss" scoped>
.post {
    img {
        max-width: 100%;
    }

    .post-header {
        display: flex;
        align-items: center;
        height: 60px;
        &-author {
            display: flex;
            align-items: center;

            .author {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
            }
        }
        &-more {
            margin-left: auto;
        }
    }
}
</style>
