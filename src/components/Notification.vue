<template>
<div class="notification-block">
    <div class="search-box ">
        <input type="search" class="form-control bg-light w-75 m-4" style="border-radius:30px" placeholder="Search Tweet">
    </div>

    <div class="trend-tweet m-4 p-3 bg-light">
        <h5 class="pt-2">What's happening </h5>
        <div class="trend-post m-2">
            <h6>#Covid19</h6>
            <p>Two states of china in lockdown due to covid 19.</p>
        </div>
        <div class="trend-post m-2">
            <h6>#Covid19</h6>
            <p>Two states of china in lockdown due to covid 19.</p>
        </div>
        <div class="trend-post m-2">
            <h6>#Covid19</h6>
            <p>Two states of china in lockdown due to covid 19.</p>
        </div>
    </div>

    <div class="trend-tweet m-4 bg-light">
        <h5 class="p-3" >Who to follow </h5>
        <div class="trend-post">
            <div class="card" style="max-width: 100%;border-top:none">
                <div class="row bg-light">
                    <div class="col-2">
                        <img src="../assets/profile.jpg" class="user-profile-icon">
                    </div>
                    <div class="col-5">
                        <div class="card-body" style="font-size:15px">
                            <b>Vivek Gupta</b>
                            its_vivek_gupta
                        </div>
                    </div>
                    <div class="col-5 pt-4">
                        <button class="btn btn-primary">follow</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="trend-post">
            <div class="card" style="max-width: 100%;border-top:none">
                <div class="row bg-light">
                    <div class="col-2">
                        <img src="../assets/profile.jpg" class="user-profile-icon">
                    </div>
                    <div class="col-5">
                        <div class="card-body" style="font-size:15px">
                            <b>Vivek Gupta</b>
                            its_vivek_gupta
                        </div>
                    </div>
                    <div class="col-5 pt-4">
                        <button class="btn btn-primary">follow</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Notification"
}
</script>

<style>
.notification-block {
    position: fixed;
    left: 70%;
    width: 30%;
}

.trend-tweet {
    border-radius: 20px;

}

.trend-tweet h5 {
    font-weight: bold;
}

.trend-post h6 {
    font-weight: bold;
}

.trend-post {
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
}
</style>
