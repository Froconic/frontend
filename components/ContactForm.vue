<template>
    <div class="contact-form">
        <form id="contact-form">
            <div class="row">
                <div class="col-12">
                    <input name="con_name" type="text" placeholder="Name *">
                </div>

                <div class="col-12 mt--30">
                    <input name="con_email" type="text" placeholder="Email *">
                </div>

                <div class="col-12 mt--30">
                    <input type="text" name="con_phone" placeholder="Phone number">
                </div>

                <div class="col-12 mt--30">
                    <textarea name="con_message" placeholder="Your message"></textarea>
                </div>

                <div class="col-12 mt--30">
                    <div class="check-box">
                        <input type="checkbox" name="check" id="check">
                        <label for="check">I agree this terms and condition.</label>
                    </div>
                </div>

                <div class="col-lg-12 mt--30">
                    <input type="submit" value="Send message">
                    <p class="form-messege"></p>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {

    };
</script>

<style lang="scss">

</style>