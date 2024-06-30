<template>
    <!-- <p>sas</p> -->
    <section>
        <div class="layheader">

            <div class="h-align
        ">

                <p class="h-content" @click="scrollTop">Home</p>

                <p class="h-content" @click="scrollTopproject">PROJECTS</p>
                <p class="h-content" @click="scrollToHeight(4300)">CAREERS</p>
                <p class="h-content" @click="scrollToBottom">CONTACT</p>

            </div>
            <!-- <i class="pi pi-bars trig" style="font-size: 2rem"></i> -->
            <div class="appsicon mx-4">
                <i class="pi pi-bars header-images" @click="mobileoptiontoggle"
                    style="font-size: 2rem;color: white;"></i>

                <!-- <img src="@/assets/Img/icons/appsicon.svg" class="header-images" alt="" @click="mobileoptiontoggle" /> -->
                <div class="mobiletoggle" v-if="mobileoptionvisible">


                    <div @click="scrollTop
                        " class="d-flex align-items-center py-2">

                        <!-- <div>
                        <img src="@/assets/Img/icons/mytask.svg" class="header-images" />
                    </div> -->
                        <p class="menu-txt">Home</p>
                    </div>


                    <div class="d-flex align-items-center py-2" @click="scrollTopproject
                        ">
                        <div>
                            <!-- <img src="@/assets/Img/icons/settingimg.svg" class="header-images" /> -->
                        </div>
                        <p class="menu-txt">Project</p>
                    </div>
                    <div class="d-flex align-items-center py-2" @click="
                        scrollToHeight(9300)

                        ">
                        <div>
                            <!-- <img src="@/assets/Img/icons/settingimg.svg" class="header-images" /> -->
                        </div>
                        <p class="menu-txt">Careers</p>
                    </div>
                    <div class="d-flex align-items-center py-2" @click="scrollToBottom

                        ">
                        <div>
                            <!-- <img src="@/assets/Img/icons/settingimg.svg" class="header-images" /> -->
                        </div>
                        <p class="menu-txt">Contact</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="router-screen" @click="handleClickOutside">
        <div class="main-inner-screen scrollable-element scrollable-elementcareer" ref="scrollableElement">

            <RouterView />
        </div>
        <!-- <div class=" footer-screen">
            <Footer />
        </div> -->
    </div>
    <!-- <RouterView /> -->
</template>

<script lang="ts">
import { defineComponent, ref, onUnmounted, onMounted, watch } from 'vue'
import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router'

export default defineComponent({

    setup() {

        const products = ref();
        const router = useRouter();
        const route = useRoute();

        const mobileoptionvisible = ref(false);
        const sidebarwidth = ref("3rem !important");

        const handleClickOutside = (event) => {
            debugger;
            if (window.innerWidth < 992) {
                sidebarwidth.value = "0rem";
            } else {
                sidebarwidth.value = "3rem";
            }
            mobileoptionvisible.value = false;
        };
        function mobileoptiontoggle() {
            mobileoptionvisible.value = !mobileoptionvisible.value;
        }
        const scrollableElement: any = ref(null);

        const scrollToBottom = () => {
            if (scrollableElement.value) {
                scrollableElement.value.scrollTop = scrollableElement.value.scrollHeight;
            }
            mobileoptionvisible.value = false

        };
        const scrollToHeight = (height) => {
            router.push({
                path: '/'
            })
            // alert(JSON.stringify(route.path))
            if (route.path == '/') {
                if (scrollableElement.value) {
                    scrollableElement.value.scrollTop = height;
                }
            }
            mobileoptionvisible.value = false

        };
        onUnmounted(() => {
            // alert('s')
            if (route.path == '/') {
                if (scrollableElement.value) {
                    scrollableElement.value.scrollTop = 2300;
                }
            }
        })
        onMounted(() => {
            // alert('s')
            if (scrollableElement.value) {
                scrollableElement.value.scrollTop = 0;
            }
        });

        const scrollTop = () => {
            // if (scrollableElement.value) {
            //     scrollableElement.value.scrollTop = scrollableElement.value.scrollHeight;
            // }
            // mobileoptionvisible.value = false
            router.push({ path: '/' })
            if (scrollableElement.value) {
                scrollableElement.value.scrollTop = 0;
            }
            mobileoptionvisible.value = false

        };
        const scrollTopproject = () => {
            // if (scrollableElement.value) {
            //     scrollableElement.value.scrollTop = scrollableElement.value.scrollHeight;
            // }
            // mobileoptionvisible.value = false
            router.push({ path: '/Project' })
            if (scrollableElement.value) {
                scrollableElement.value.scrollTop = 0;
            }
            mobileoptionvisible.value = false

        };
        watch(
            () => route.path,
            (newVal) => {
                // alert('2')
                if (scrollableElement.value) {
                    scrollableElement.value.scrollTop = 0;
                }
                // LoadStore()
            }

        );
        return {
            scrollTopproject,
            scrollTop,

            scrollToHeight,
            scrollableElement,
            scrollToBottom,
            handleClickOutside,
            mobileoptiontoggle,
            sidebarwidth,
            mobileoptionvisible

        }
    }

})
</script>
<style lang="scss">
@import "@/assets/variables.scss";

//Header-Styles

.hamburger .pi {
    color: $Hamburger;
}



.mobiletoggle .header-images {
    filter: $HeaderMenuImages !important;
    color: white;
}

.crmlogobg {
    background-color: $HeaderLogoBg;
}

.sidebarmenu img {
    filter: $HeaderImages;
}

//Header-Styles

.mobiletoggle img {
    width: 28px;
}

.crmheading {
    font-size: 12px;
    color: $CrmHeading;
    margin: auto 12px;
}

.hamburger .pi {
    font-size: 23px;
    padding: 12px 12px;
}

.appsicon {
    display: none;
    text-align: -webkit-right;
}

.mobiletoggle {
    position: absolute;
    background-color: #fff;
    z-index: 999;
    padding: 22px;
    border-radius: 5px;
    right: 1%;
    top: 8%;
    width: 200px;
    cursor: pointer;
}

.mobiletoggle div {
    padding: 3px 0;
}

.mobiletoggle p {
    font-size: 14px;
}





@media only screen and (max-width: 1400px) {
    .main-inner-screen {
        // height: 87.5vh !important;
    }
}

@media only screen and (min-width: 1400px) {
    .main-inner-screen {
        // height: 90.5vh !important;
        // display: flex;
        // justify-content: center;
    }

    .profilemenu {
        // left:1185px;
        top: 45px;
        width: 15rem;
    }
}

@media only screen and (min-width: 1500px) {
    .router-screen {
        width: 100%;
        // margin-left: auto;
    }
}

@media only screen and (max-width: 991px) {
    .crmlogobg {
        background: none;
    }

    .router-screen {
        width: 100%;
        // margin-left: 0;
    }

    .profilemenu {
        // left:1270px;
        top: 45px;
        width: 15rem;
    }
}

@media only screen and (max-width: 768px) {
    .appsicon {
        display: block;
    }

    .crmsettings {
        display: none !important;
    }

    .mobiletoggle .notification-number-badge {
        left: 14%;
        top: 47%;
    }

    .mobiletoggle .whatsappicon-badge {
        left: 14%;
        top: 27%;
    }

    .mobiletoggle .callicon-badge {
        left: 14%;
        top: 7%;
    }
}

@media only screen and (max-width: 575px) {
    .livecallsbg {
        display: none;
        padding: 1px 10px !important;
    }

    .mobilelivecalls .livecallsbg {
        display: block;
    }

    .mobiletoggle {
        right: 4%;
    }

    .mobiletoggle .notification-number-badge {
        top: 52%;
        left: 13%;
    }

    .mobiletoggle .whatsappicon-badge {
        top: 36%;
        left: 13%;
    }

    .mobiletoggle .callicon-badge {
        top: 20%;
        left: 13%;
    }

    .main-inner-screen {
        // height: 81.5vh;
    }
}

@media only screen and (max-width: 426px) {
    .mobiletoggle {
        right: 8%;
    }

    // .main-inner-screen {
    //   padding: 20px 2px 0px 0px !important;
    // }
}

.active-indicator {
    background-color: #00ff00;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    position: absolute;
    right: -5px;
    top: -5px;
}

.inactive-indicator {
    background-color: #ffa500;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    position: absolute;
    right: -5px;
    top: -5px;
}

.sidebaravatar {
    background-color: $SidebarAvatarBg !important;
    color: $SidebarAvatarColor;
}

.header-avatar {
    background-color: $HeaderAvatarBg !important;
    color: $HeaderAvatarColor;
}

.avatar-shape {
    height: 50px !important;
    width: 60px !important;
    border-radius: 50% !important;
    //margin-right: 20px !important;
}
</style>
<style lang="scss" scoped>
/* Define your CSS styles here */
.scrollable-element {
    /* Define styles for the scrollable element */
    height: 100vh;
    /* Example height */
    overflow-y: auto;
    position: relative;
    /* Enable vertical scrolling */
}

.scrollable-elementcareer {
    /* Define styles for the scrollable element */
    height: 100vh;
    /* Example height */
    overflow-y: 80%;
    position: relative;
    /* Enable vertical scrolling */
}

.layheader {
    width: 100%;
    height: 70px;
    background-color: #181737;
    align-content: center;
}

.h-content {
    font-family: Roboto;
    margin: 0px 10px;
    font-size: 15px;
    color: #FFFFFF;
    font-style: italic;
    font-weight: 600;
    // line-height: 28.13px;
    text-align: left;
    cursor: pointer;

}

.menu-txt {
    font-family: Roboto;
    margin: 0px 10px;
    font-size: 17px;
    color: #000000;
    font-weight: 500;
    cursor: pointer;
    // line-height: 28.13px;
    text-align: left;
}

.h-align {
    display: flex;
    justify-content: flex-end;
}



.trig {
    display: none;
    // justify-content: flex-end;
    // color: white;
}

@media only screen and (max-width: 2560px) and (min-width: 1440px) {
    // .intro {
    //     padding-left: 35px;
    // }
}

@media only screen and (max-width: 768px) {
    .h-align {
        display: none;
    }

    .trig {
        display: flex;
        justify-content: flex-end;
        color: white;
        margin-right: 15px;
        cursor: pointer;
    }

}
</style>
