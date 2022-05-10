<template>
<div class="tweet-card">
    <div class="w-100 p-2 bg-light fixed">
        <h4 style="font-weight:bold">Home</h4>
    </div>
    <div class="card mb-3" style="max-width: 100%;border-top:none">
        <div class="row no-gutters">
            <div class="col-md-1">
                <img src="../assets/profile.jpg" class="user-profile-icon">
            </div>
            <div class="col-md-11">
                <div class="card-body">
                    <textarea class="form-control border-0 shadow-none" style="font-size:23px;" placeholder="What's happening?"></textarea>
                    <font-awesome-icon class="tweet-icon" icon="image" />
                    <font-awesome-icon class="tweet-icon" icon="image" />
                    <font-awesome-icon class="tweet-icon" icon="poll" />
                    <font-awesome-icon class="tweet-icon" icon="smile" />
                    <font-awesome-icon class="tweet-icon" icon="location" />
                    <button class="cirlce tweet-btn">Tweet</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'NewTweet'
}
</script>

<style>
.icon {
    width: 100px;
    height: 100px;
    height: auto;
    position: relative;
}

.user-profile-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 20px;
}

.tweet-card {
    position: absolute;
    left: 25%;
    width: 45%;
}

textarea:focus {
    outline: none;
}

.tweet-btn {
    float: right;
    margin-right: 40px;
    margin-bottom: 20px;
    border-radius: 40px;
    padding: 10px 20px 10px 20px;
    color: white;
    background: #0066cc;
    border: none;
    font-weight: bold;
}

.tweet-icon {
    font-size: 20px;
    margin: 10px;
    color: #0066cc;
    display: inline-block;
}
</style>
