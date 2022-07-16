<template>
    <div class="brook-team-area bg_color--5 ptb--100 ptb-sm--60 ptb-md--80">
        <div class="container">
            <div class="row row--30">
                <div class="col-lg-4 col-md-4 col-sm-6 col-12" v-for="teamMember in data.teamMembers.slice(4, 7)" :key="teamMember.id">
                    <TeamMemberThree :teamMember="teamMember" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TeamMemberThree from '@/components/TeamMemberThree';

    import data from '../../data/team.json';

    export default {
        components: {
            TeamMemberThree,
        },

        data () {
            return {
                data
            }
        }
    };
</script>