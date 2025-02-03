<template>
  <div>
    <h2 class="header">Mike McGowan | Portfolio</h2>
    <div class="view">
        <div class="container">
            <div class="company" :class="{ 'selected': selectedCompany === 'igg' }" @click="expandCompany('igg')">
                <h3 class="company-name">Indiegogo</h3>
                <img class="company-img" src="../assets/igg_main.png" />
                <div class="company-img-overlay" />
            </div>
            <div class="company" :class="{ 'selected': selectedCompany === 'everlane' }" @click="expandCompany('everlane')">
                <h3 class="company-name">Everlane</h3>
                <img class="company-img" src="../assets/everlane_main.png" />
                <div class="company-img-overlay" />
            </div>
            <div class="company" :class="{ 'selected': selectedCompany === 'brilliant' }" @click="expandCompany('brilliant')">
                <h3 class="company-name">Brilliant</h3>
                <img class="company-img" src="../assets/brilliant_main.png" />
                <div class="company-img-overlay" />
            </div>
            <div class="company" :class="{ 'selected': selectedCompany === 'backline' }" @click="expandCompany('backline')">
                <h3 class="company-name">Backline</h3>
                <img class="company-img" src="../assets/backline_main.png" />
                <div class="company-img-overlay" />
            </div>
            <div class="company" :class="{ 'selected': selectedCompany === 'harmonic' }" @click="expandCompany('harmonic')">
                <h3 class="company-name">Harmonic</h3>
                <img class="company-img" src="../assets/harmonic_main.png" />
                <div class="company-img-overlay" />
            </div>
        </div>
        <div class="sidebar" v-if="selectedCompany">
            <div class="sidebar-back" @click="goBack()">⬅️ Go back</div>
            <div v-if="selectedCompany === 'igg'" class="project-pane">
                <h3 class="project-name">Android App</h3>
                <div class="project-imgs">
                    <img src="../assets/igg_android_1.png" />
                    <img src="../assets/igg_android_2.png" />
                    <img src="../assets/igg_android_3.png" />
                </div>
                <div class="project-body">
                    The Indiegogo Android App gave crowdfunding enthusiasts everything they needed to find, save, and contribute to campaigns on the go! It was even recognized at Google IO as an exemplary application for Material Design... which definitely used to be cool!
                </div>
                <div class="project-tags">
                    <div>Java</div>
                    <div>Kotlin</div>
                    <div>GraphQL</div>
                    <div>Ruby on Rails</div>
                </div>
                <h3 class="project-name">Campaign Page | Perks</h3>
                <div class="project-imgs">
                    <img src="../assets/igg_perks_1.png" />
                    <img src="../assets/igg_perks_2.png" />
                </div>
                <div class="project-body">
                    Picking your perk (the reward/tier at which you wish to contribute) for a campaign is a critical moment for a crowdfunding backer! Our work on this flow enabled great customization to the campaigner (by virtue of creating "perk items" which could be mixed and matched into the actual "perk" tiers)
                </div>
                <div class="project-tags">
                    <div>Angular.js</div>
                    <div>React</div>
                    <div>GraphQL</div>
                    <div>Ruby on Rails</div>
                </div>
                <h3 class="project-name">Campaign Page | Tags</h3>
                <div class="project-imgs">
                    <img src="../assets/igg_tags_1.png" />
                    <img src="../assets/igg_tags_2.png" />
                </div>
                <div class="project-body">
                    How are you gonna contribute to a campaign if you can't find it? We introduced a tagging infrastructure so that, even if you couldn't remember the exact name of the project you were looking for, you might be able to get there by supplying the right search terms!
                </div>
                <div class="project-tags">
                    <div>Angular.js</div>
                    <div>React</div>
                    <div>GraphQL</div>
                    <div>Elasticsearch</div>
                    <div>Ruby on Rails</div>
                </div>
            </div>
            <div v-if="selectedCompany === 'everlane'" class="project-pane">
                <h3 class="project-name">International Business</h3>
                <div class="project-imgs">
                    <img src="../assets/everlane_intl_1.png" />
                    <img src="../assets/everlane_intl_2.png" />
                </div>
                <div class="project-body">
                    In order to accommodate Everlane's global audience, it became imperative to allow for browsing and shopping in foreign currencies.
                </div>
                <div class="project-tags">
                    <div>Angular.js</div>
                    <div>React</div>
                    <div>GraphQL</div>
                    <div>Ruby on Rails</div>
                </div>
                <h3 class="project-name">Collection Page</h3>
                <div class="project-imgs">
                    <img src="../assets/everlane_coll_1.png" />
                    <img src="../assets/everlane_coll_2.png" />
                </div>
                <div class="project-body">
                    Everlane entered a $2M contract with Constructor to supercharge its Collection pages: this integration involved uploading a category of Everlane's products as well as giving Constructor access to user browsing data to provide highly personalized Collection pages that dramatically increased conversion.
                </div>
                <div class="project-tags">
                    <div>Angular.js</div>
                    <div>React</div>
                    <div>GraphQL</div>
                    <div>SFTP</div>
                    <div>Ruby on Rails</div>
                </div>
            </div>
            <div v-if="selectedCompany === 'brilliant'" class="project-pane">
                <h3 class="project-name">Lesson Experience</h3>
                <div class="project-imgs">
                    <img src="../assets/brilliant_lesson_1.png" />
                    <img src="../assets/brilliant_lesson_2.png" />
                    <img src="../assets/brilliant_lesson_3.png" />
                    <img src="../assets/brilliant_lesson_4.png" />
                </div>
                <div class="project-body">
                    The Lesson Experience is the "core" learning interface on Brilliant.org. I oversaw the development of a huge evolution of its visual language, feedback mechanisms, and branching flows that optimized learning and delighted users.
                </div>
                <div class="project-tags">
                    <div>Elm</div>
                    <div>Python/Django</div>
                </div>
                <h3 class="project-name">Halfsies</h3>
                <div class="project-imgs">
                    <img src="../assets/brilliant_halfsies_1.png" />
                    <img src="../assets/brilliant_halfsies_2.png" />
                    <img src="../assets/brilliant_halfsies_3.png" />
                </div>
                <div class="project-body">
                    In an attempt to capture some hype around Wordle-like games, Brilliant strategically created the game <a href="https://brilliant.org/halfsies">Halfsies</a> whose technical development I led. Do you think yoou'll be the next Halfsies Hero?
                </div>
                <div class="project-tags">
                    <div>Elm</div>
                    <div>React</div>
                    <div>GraphQL</div>
                    <div>Python/Django</div>
                </div>
                <h3 class="project-name">Practice Experience</h3>
                <div class="project-imgs">
                    <img src="../assets/brilliant_practice_1.png" />
                    <img src="../assets/brilliant_practice_2.png" />
                    <img src="../assets/brilliant_practice_3.png" />
                </div>
                <div class="project-body">
                    We got a lot of feedback from our learners that they <em>loved</em> the Lesson experience, but they wanted some way to quickly and easily stay sharp! I was the TLM on the team that launched the Practice experience to scratch that very itch.
                </div>
                <div class="project-tags">
                    <div>Elm</div>
                    <div>React</div>
                    <div>GraphQL</div>
                    <div>Python/Django</div>
                </div>
                <h3 class="project-name">Practice Authoring</h3>
                <div class="project-imgs">
                    <img src="../assets/brilliant_authoring_1.png" />
                </div>
                <div class="project-body">
                    In order to give our internal authors the best, most seamless experience generating those Practice lessons, we built out a suite of robust tooling to make authoring Practice Sets super easy. There's no reason to skimp on delight for internal users!
                </div>
                <div class="project-tags">
                    <div>Elm</div>
                    <div>React</div>
                    <div>GraphQL</div>
                    <div>Python/Django</div>
                </div>
            </div>
            <div v-if="selectedCompany === 'backline'" class="project-pane">
                <h3 class="project-name">Ticket Management</h3>
                <div class="project-imgs">
                    <img src="../assets/backline_ticket_1.png" />
                    <img src="../assets/backline_ticket_2.png" />
                </div>
                <div class="project-body">
                    With monopolies like LiveNation + TicketMaster looming about, it's more important than ever that power and control over tickets is given to independent artists and bands. This ticekting management feature of Backline gives some of that control back to the artists -- where it belongs!
                </div>
                <div class="project-tags">
                    <div>React</div>
                    <div>Ruby on Rails</div>
                </div>
                <h3 class="project-name">Tour Calendar</h3>
                <div class="project-imgs">
                    <img src="../assets/backline_tour_1.png" />
                </div>
                <div class="project-body">
                    As any tour manager can tell you, the logistics of knowing where and when your team needs to be can be harrowing. Backline seeks to simplify organize the noise, and features like the Tour Calendar are imperative to that journey!
                </div>
                <div class="project-tags">
                    <div>React</div>
                    <div>Ruby on Rails</div>
                </div>
            </div>
            <div v-if="selectedCompany === 'harmonic'" class="project-pane">
                <h3 class="project-name">A Fun Clicky Button</h3>
                <div class="project-body">
                    The Harmonic About page has this button to explore open roles:
                </div>
                <div class="project-body">
                    <div class="clicky-button-container">
                        <div class="clicky-corner-top" />
                        <div class="clicky-corner-bottom" />
                        <a @click="youClicked('harmonic')" class="clicky-button" target="_blank">See Open Roles</a>
                    </div>
                </div>
                <div class="click-counter">Clicks: {{ harmonicClicks }}</div>
                <div class="project-body">
                    But it suffers from a common bug that I see with "clicky" buttons like this where clicks on the very edge of the button don't register. So, I decided to reimplement it, sacrificing none of the delight while delivering the full, expected functionality. Just for fun!
                </div>
                <div class="project-body">
                    <div class="clicky-button-container">
                        <div class="clicky-corner-top" />
                        <div class="clicky-corner-bottom" />
                        <a @click="youClicked('mike')" class="clicky-button-good" target="_blank">See Open Roles</a>
                    </div>
                </div>
                <div class="click-counter">Clicks: {{ mikeClicks }}</div>
                <div class="project-body extra-margin-bottom">
                    And would you believe I didn't have to juse ANY JavaScript to do it?! 🤯
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data: () => {
    return {
        selectedCompany: null,
        harmonicClicks: 0,
        mikeClicks: 0,
    };
  },
  methods: {
    expandCompany: function(company) {
        if (this.selectedCompany === company) {
            this.selectedCompany = null
        } else {
            this.selectedCompany = company
        }
    },
    goBack: function() {
        this.selectedCompany = null
    },
    youClicked: function(who) {
        if (who === 'harmonic') {
            this.harmonicClicks = this.harmonicClicks + 1
        } else {
            this.mikeClicks = this.mikeClicks + 1
        }
    }
  },
};
</script>

<style>
@import "./global.css";

:root {
    --img-width: 200px;
    --img-height: 150px;
}
@media (min-width: 500px) {
    :root {
        --img-width: 400px;
        --img-height: 300px;
    }
}

body {
  color: var(--super-famous-white);
  background-color: var(--super-famous-black);
  font-family: var(--super-famous-font);
  margin: 0;
}

.header {
    margin-left: 24px;
    font-size: 32px;
}

.view {
    display: flex;
    margin-bottom: 24px;
}

@media (max-width: 499px) {
    .sidebar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100vw;
        min-width: 100vw;
        height: 100dvh;
        min-height: 100dvh;
        padding: 24px;
        overflow: auto;
        background: var(--super-famous-black);
        z-index: 100;
    }

    .sidebar-back {
        display: block;
        cursor: pointer;
        font-size: 24px;
        font-weight: bold;
    }
}

@media (min-width: 500px) {
    .sidebar {
        flex: 3;
        position: sticky;
        top: 0;
        align-self: flex-start;
        padding-top: 24px;
        overflow-x: auto;
    }

    .sidebar-back {
        display: none;
    }
}

.company {
    cursor: pointer;
    margin-bottom: 16px;
    position: relative;
    flex: 1;
    max-height: var(--img-height);
    max-width: var(--img-width);
    transition: scale ease 300ms;
}

.company:hover, .company.selected {
    outline: 2px solid white;
}

.company:active {
    scale: 0.9;
}

.company-name {
    font-size: 24px;
    margin: 0;
    position: absolute;
    z-index: 2;
    width: 100%;
    left: 16px;
    padding: 16px 0;
    bottom: 0;
    transition: all ease 300ms;
}

.company.selected .company-name,
.company:hover .company-name {
    color: var(--super-famous-black);
    width: calc(100% - 16px);
    background: rgba(255, 255, 255, 0.90);
    left: 0;
    padding: 16px 0 16px 16px;
    bottom: 0;
}


.company-img {
    max-height: var(--img-height);
    max-width: var(--img-width);
    object-fit: cover;
    object-position: center;
}

.company-img-overlay {
    background: rgba(0, 0, 0, 0.75);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    max-height: var(--img-height);
    max-width: var(--img-width);
    transition: background ease 300ms;
}

.company.selected .company-img-overlay,
.company:hover .company-img-overlay {
    background: rgba(0, 0, 0, 0);
}

.container {
    flex: 2;
    margin-inline: 24px;
    border: 2px solid rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    padding: 16px;
    padding-bottom: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;
}

.project-imgs {
    display: flex;
    gap: 16px;
    overflow-x: auto;
}

.project-imgs img {
    height: 300px;
}

.project-body {
    padding: 16px;
}

.project-tags {
    display: flex;
    gap: 8px;
    margin-bottom: 32px;
    overflow-x: auto;
}

.project-tags div {
    background: rgba(255, 255, 255, 0.9);
    font-family: monospace;
    color: var(--super-famous-black);
    border-radius: 4px;
    padding: 8px;
    white-space: nowrap;
}

.clicky-button-container {
    background: #03439b;
    display: inline-block;
    position: relative;
}
.clicky-button {
    border: 2px solid #03439b;
    background-color: white;
    color: #03439b;
    padding: 0 1.5rem;
    text-decoration: none;
    text-wrap: nowrap;
    white-space: nowrap;
    font-size: 2rem;
    display: block;
    transform: translate3d(-.7rem, -.7rem, 0);
    line-height: 1.5;
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent
}

.clicky-button-good {
    border: 2px solid #03439b;
    background-color: white;
    color: #03439b;
    padding: 0 1.5rem;
    text-decoration: none;
    text-wrap: nowrap;
    white-space: nowrap;
    font-size: 2rem;
    display: block;
    transform: translate3d(-.7rem, -.7rem, 0);
    line-height: 1.5;
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent
}

.clicky-button-good::before {
    content: '';
    position: absolute;
    top: 0;
    right: -1rem;
    left: unset;
    background: transparent;
    width: 1rem;
    height: 100%;
}

.clicky-button-good::after {
    content: '';
    position: absolute;
    top: unset;
    bottom: -1rem;
    left: 0;
    background: transparent;
    width: 100%;
    height: 1rem;
}

.clicky-button:hover {
    background-color: #4979ba;
    color: white;
}

.clicky-button-good:hover {
    background-color: #4979ba;
    color: white;
}

.clicky-corner-top {
    left: -.7rem;
    bottom: -.3rem;
    width: 1rem;
    height: 1rem;
    transition: all .1s ease;
    transform: rotate(-45deg) scale(0);
    background: #154280;
    position: absolute;
    z-index: 0;
    transform-origin: 0% 0%;
    transform: rotate(-45deg) scale(1);
    transition-delay: 75ms;
}

.clicky-corner-bottom {
    width: 1rem;
    height: 1rem;
    transition: all .1s ease;
    background: #154280;
    position: absolute;
    z-index: 0;
    left: auto;
    top: -.3rem;
    right: .7rem;
    bottom: auto;
    transform-origin: 100% 100%;
    transition-delay: 75ms;
    transform: rotate(45deg) scale(1);
}

.clicky-button-container:active .clicky-corner-top {
    display: none;
}

.clicky-button-container:active .clicky-corner-bottom {
    display: none;
}

.clicky-button-container:active .clicky-button {
    transition: all .1s ease;
    display: block;
    transform: translate3d(0, 0, 0);
}

.clicky-button-container:active .clicky-button-good {
    transition: all .1s ease;
    display: block;
    transform: translate3d(0, 0, 0);
}

.clicky-button-container:active .clicky-button-good::before {
    left: -1rem;
}

.clicky-button-container:active .clicky-button-good::after {
    top: -1rem;
}

.click-counter {
    margin-bottom: 48px;
    width: 100%;
    display: flex;
    font-weight: bold;
    font-size: 18px;
    user-select: none;
}

@media (max-width: 499px) {
    .project-pane {
        width: calc(100vw - 48px);
        margin-bottom: 48px;
    }
}

@media (min-width: 500px) {
    .project-pane {
        width: calc(100% - 48px);
        margin-bottom: 48px;
    }
}

.extra-margin-bottom {
    margin-bottom: 48px;
}
</style>
