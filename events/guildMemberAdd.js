module.exports = member => {
    let username = member.user.username;
    member.sendMessage('https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiQhdqq2qDiAhWLPFAKHQIzCJQQjRx6BAgBEAU&url=https%3A%2F%2Fwifflegif.com%2Fgifs%2F549643-homer-simpson-the-simpsons-gif&psig=AOvVaw2xOQKe4Rz_FRglDmxY2WBI&ust=1558118614572156 Sunucuma Hoş Geldin **' + username + '**Keifli Vakit Keçirmen Dileğiyle');
    member.guild.defaultChannel.send('hg '+username+'');
};
