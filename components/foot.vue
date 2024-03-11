<template>
    <div class="bg-other">
        <div class="container pt-3 pb-4 myContainerToEnlarge">
            <div class="row text-white text-center mt-6 pt-3 myContainerToEnlarge">
                <div class="col-sm">
                    <h3 class="text-yellow mt-3 ">Adresse</h3>
                    <p class="text-break">
                        <a class="text-white text-decoration-none text-yellow" href="mailto:contact@tic-et-tac-bar.fr">
                            135 Rue Sébastien Gryphe
                        </a>
                    </p>
                    <p>69007 LYON</p>
                </div>
                <div class="col-sm">
                    <h3 class="text-yellow mt-3">Contact</h3>
                    <address>
                        <p class="text-break">
                            <a class="text-white text-decoration-none text-yellow" href="mailto:contact@tic-et-tac-bar.fr">
                                contact@tic-et-tac-bar.fr
                            </a>
                        </p> 
                    </address>
                </div>
                <div class="col-sm ">
                    <h3 class="text-yellow mt-3">Horaires</h3>
                    <p>du lundi au samedi</p>
                    <p>De 17h00 à 01h00</p>
                </div>
                
            </div>
            <hr style="color: white">
            <div class="container-fuiled">
                <!-- row -->
                <div class="row">
                    <!-- copyright column -->
                    <div class="col-sm">
                        <div class="pt-3 text-white text-center">
                            © {{date}} Copyright 
                            <p class="text-white text-decoration-none">Tic &amp; Tac Bar</p>
                        </div>
                    </div>
                    <!-- links column -->
                    <div class="col-sm text-white text-center fs-3" :class="!isMobile ? 'row' : ''">
                        <div class="d-flex justify-content-around align-items-center">
                            <div class="col-sm-6 col-8">
                                <!-- Instagram link -->
                                <a class="text-white text-decoration-none" href="https://www.instagram.com/tic.et.tac.bar/"><Icon name="mdi:instagram" color="#ff8000" size="32px" /></a>
                                <!-- Google map link-->
                                <a class="text-white text-decoration-none mySiteIcons" href="https://goo.gl/maps/AMMvjQtaDPKYQYaSA"><Icon name="mdi:map-marker-radius-outline" color="#ff8000" size="32px" /></a>
                                <!-- Mail link -->
                                <a class="text-white text-decoration-none mySiteIcons" href="mailto:contact@tic-et-tac-bar.fr"><Icon name="mdi:email-outline" color="#ff8000" size="32px" /></a>

                            </div>  
                        </div>
                    </div>
                    <!-- Privacy Policy link and Terms Condition link column -->
                    <div class="col-sm p-3  text-white text-center">
                        <div class="col">
                        <a href="/carte.pdf" class="text-decoration-none text-white pe-1" target="_blank">Menu </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import windowWidthMixin from '@/mixins/windowWidthMixin'

export default {
name:'foot',
mixins: [windowWidthMixin],
setup(){
    //Copyright Date
    const date=ref(new Date().getFullYear())
    return{
        date
    }
}
}
</script>

<style scoped>
@font-face {
    font-family: "Noto Sans";
    src: local("Noto Sans"),
    url(@/assets/fonts/NotoSans-Regular.ttf) format("truetype");
}

.bg-other{
    background-color: #000
}

.bg-yellow{
    background-color: #ff8000
}

.text-yellow{
    color: #ff8000
}

/* For Desktop View */
@media screen and (min-width: 1024px) {

}

/* For Tablet View */
@media screen and (min-device-width: 768px)
and (max-device-width: 1024px) {

}

/* For Mobile Portrait View */
@media screen and (max-device-width: 480px)
and (orientation: portrait) {
.textCarreJaune{
    width:100%!important
}

.showOnPC{
    display: none
}

.myContainerToEnlarge{
    width: 100%!important;
    margin: 0!important;
    padding: 0!important
}

.myIcons{
    display: inline-block!important;
    width: 100%!important
}

.mySiteIcons{
    margin-left: 10%!important;
}
}

@media screen and (min-device-width: 720px) {
.mySiteIcons{
    padding-left:25%!important
}

.myIcons{
    display: inline-block!important;
    width: 100%!important
}
}
/* For Mobile Landscape View */
@media screen and (max-device-width: 640px)
and (orientation: landscape) {

}

/* For Mobile Phones Portrait or Landscape View */
@media screen and (max-device-width: 640px) {
}

/* For iPhone 4 Portrait or Landscape View */
@media screen and (min-device-width: 320px)
and (-webkit-min-device-pixel-ratio: 2) {
}

/* For iPhone 5 Portrait or Landscape View */
@media (device-height: 568px) and (device-width: 320px)
and (-webkit-min-device-pixel-ratio: 2) {
}

/* For iPhone 6 and 6 plus Portrait or Landscape View */
@media (min-device-height: 667px) and (min-device-width: 375px)
and (-webkit-min-device-pixel-ratio: 3) {
}
</style>
