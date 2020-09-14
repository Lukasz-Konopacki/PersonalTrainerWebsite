document.addEventListener('DOMContentLoaded', (event) => {
    window.fbAsyncInit = function() {
        FB.init({
            appId: '934476857051389',
            autoLogAppEvents: true,
            xfbml: true,
            version: 'v8.0'
        });

        FB.api('/214773039062985', {
            access_token: "EAANR5tkdiP0BAGRHSHgosnw05p4O4bxDTeN22fFDs1iA6TyyvrUbdURSFmlKihLsmvjWu7yzCJrb5F0iDh861soObO13szvPpb6wOrwOTU7nnHj8wccbZAh1sLgzqtwRYDdf40EMjPi1NobhQMAMyUIhkERBhXeJxavDWMAZDZD",
            fields: "rating_count,overall_star_rating,name"
        }, function(response) {
            var fbRating = document.getElementById("fb-sum").getElementsByTagName("h5")[0];
            fbRating.innerText = response.overall_star_rating.toFixed(1);
            var fbOpinion = document.getElementById("fb-sum").getElementsByTagName("p")[0];
            fbOpinion.innerText = "Opinie: " + response.rating_count;
            console.log(response);
        });
    };
});