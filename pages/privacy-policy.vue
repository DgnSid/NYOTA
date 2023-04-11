<template>
    <div class="layout-contact">
        <TheHeaderSmall
            :title="$t('privacypolicypage.title')"
            :logo="true"
        />
        <div class="container">
            <div class="row">
                <div class="offset-lg-1">
                    <p class="mt-lg mb-lg">
                        La présente Politique de confidentialité décrit la manière dont les données personnelles sont collectés et traités dans le respect des lois et règlementations applicables, et notamment la Loi n° 78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés et le Règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016 relatif à la protection des personnes physiques à l’égard du traitement des données à caractère personnel et à la libre circulation de ces données (le “RGPD”). 
                    </p>

                    <h2>
                        Collecte des données
                    </h2>
                    <p class="mb-lg">
                        Le site internet nyota.co contient un formulaire de contact. En cas d’utilisation de ce formulaire, vous serez amené à nous communiquer les informations suivantes : Nom, prénom, données de contact (adresse email, numéro de téléphone, domicile). Ces données seront collectées et traitées pour répondre à votre demande. 
                    </p>

                    <h2>
                        Traitement des données et finalité 
                    </h2>
                    <p>
                        Les données personnelles collectées à partir du site nyota.co sont exclusivement utilisées par NYOTA dans le cadre des services proposés. Elles ne font l’objet d’aucune cession à un tiers.
                    </p> 
                    <p class="mb-lg">
                        Lorsque nous utilisons des fournisseurs de services pour le stockage et/ou de traitement des données, ceux-ci sont soigneusement sélectionnés et ne traitent les données que conformément à nos directives sur la base d’un accord contractuel et dans le respect de la règlementation. 
                    </p>

                    <h2>Durée de conservation des données</h2>
                    <p class="mb-lg">
                        La durée de conservation des données personnelles collectées depuis le site nyota.co est au maximum de 10 ans à compter de la date à laquelle elles nous ont été transmises. 
                    </p>

                    <h2>
                        Localisation des données
                    </h2>
                    <p class="mb-lg">
                        Vos données peuvent être localisées en France, dans un pays de l’Union Européenne mais aussi potentiellement en dehors de l’Union Européenne. Dans ce dernier cas, nous nous assurons que les données qui se situent dans un pays hors UE assure un niveau de protection adéquat concernant le traitement des données en conformité avec la Règlementation sur la protection des Données. A défaut, nous prenons des mesures techniques appropriées de manière que le niveau de garanti par la Règlementation sur la protection des données soit respecté. 
                    </p>

                    <h2>
                        Utilisation des cookies
                    </h2>
                    <p>
                        Un cookie est une information déposée sur le disque dur d’un internaute par le serveur du site qu’il visite. Il contient plusieurs données : le nom du serveur qui l’a déposé, un identifiant sous forme de numéro unique, éventuellement une date d’expiration. Ces informations sont parfois stockées sur l’ordinateur dans un simple fichier texte auquel un serveur accède pour lire et enregistrer des informations. 
                    </p>
                    <p>
                        Les cookies nous permettent d’optimiser votre navigation sur notre site internet et de réaliser des statistiques de visite nous permettant d’améliorer la performance de notre site internet. 
                    </p>
                    <p>
                        Vous pouvez choisir de ne pas accepter tous les cookies sauf ceux qui sont nécessaires. Dans les paramètres du navigateur, vous pouvez modifier les paramètres pour vous assurer que les cookies seront bloqués. La plupart des navigateurs vous expliquent comment le faire dans la fonction d’aide. 
                    </p>
                    <p class="mb-lg">
                        La durée de conservation des cookies est de 13 mois. A défaut de renouvellement du consentement de l’Utilisateur ces données seront supprimées. 
                    </p>

                    <h2>
                        Exercice de vos droits
                    </h2>
                    <p>
                        Conformément à la réglementation applicable en matière de protection des données personnelles et aux dispositions du Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants: 
                    </p>
                    <ul>
                        <li>
                            - demander l’accès à vos données personnelles; 
                        </li>
                        <li>
                            - demander la modification ou la suppression de vos données personnelles ;
                        </li>
                        <li>
                            - faire opposition à un traitement pour des raisons d’intérêt légitime, d’intérêt public ou de profilage,
                        </li>
                        <li>
                            - demander la portabilité de vos données personnelles.
                        </li>
                    </ul>
                    <p>
                        Pour exercer ces droits ou pour toute question sur le traitement de vos données, vous pouvez nous contacter par mail :<br>
                        <a href="mailto:contact@nyota.co">contact@nyota.co</a><br><br>
                        ou par courrier postal à l’adresse :<br>
                        NYOTA<br>
                        Elliot Spadone<br>  
                        229, rue Saint-Honoré, Paris 
                    </p>
                    <p class="mb-lg">
                        Si, après nous avoir contacté, vous estimez qu’il demeure des difficultés dans la gestion de vos données, vous pouvez adresser une réclamation à la Commission Nationale Informatique et Libertés (CNIL). 
                    </p>

                    <h2>Modification de la politique de confidentialité</h2>
                    <p>
                        La présente politique de confidentialité. Pourra faire l’objet d’actualisation. Les mises à jour de notre Politique de confidentialité seront publiées sur notre Site Internet. Toute modification entrera en vigueur dès sa publication sur notre Site Internet. Nous vous recommandons donc de visiter régulièrement notre Site Internet pour vous tenir au courant des mises à jour éventuelles. 
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TheHeaderSmall from '@/components/header/TheHeaderSmall.vue'

export default {
    name: "privacyPolicyPage",
    components: {
        TheHeaderSmall,
    },
}
</script>

<style lang="scss" scoped>
    h2 {
        font-family: $font-family-custom;
        margin-bottom: 20px;
        color: $orange;
    }
    p {
        margin-bottom: 10px;
        color: $black;
        &.mb-lg {
            margin-bottom: 40px;
        }

        &.mt-lg {
            margin-bottom: 40px;
        }
    }

    a {
        color: $orange;
        text-decoration: underline;
    }

    ul {

        color: $black;
        padding-left: 20px;
        &.mb-lg {
            margin-bottom: 40px;
        }
    }
</style>
