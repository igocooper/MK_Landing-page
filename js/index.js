$(function(){

    var Tools_descriptions = {
        human_inside : { 
            name: 'human inside',
            text: 'Your personal assistant has the <br> solution for your technical problem - whether it is a minor annoyance or a catastrophic failure.'},
        av : {
            name: 'internet security',
            text: 'Protect your Mac from phishing <br> attacks, malware, spyware, adware, <br>viruses and identity theft while you&#39re using the Internet.'},
        anti_theft: {
            name: 'anti theft',
            text: 'If your Mac gets stolen, Anti-Theft will track its location and even make an iSight snapshot of the thief.'},
        fast_cleanup : {
            name: 'fast cleanup',
            text: 'Quickly remove junk files (such as<br> temporary caches, logs, unused <br>language packages and legacy <br>application parts) that may take<br> up hard drive space and slow <br>down your Mac.'},
        duplicate_finder : {
            name: 'duplicate finder',
            text: 'Delete unnecessary copies of your files and free up disk space on your Mac.'},
        geek_on_demand : {
            name: 'geek on demand',
            text: 'Geek on Demand is the ultimate<br> tool when you have a problem<br> or question that is related to your<br> Mac&#39s health and need an expert&#39s<br> opinion or technical assistance.'},
        update_tracker : { 
            name: 'update tracker',
            text: 'With Update Tracker you will never miss out any important security patches and upgrades for most of your applications.'},
        backup : {
            name: 'backup',
            text: 'Backing up your important files and folders is an easy, fast and reliable way to keep them safe and secure.'},
        file_recovery : {
            name: 'file recovery',
            text: 'Now you can recover files that were once deleted from the Trash!.'},
        disk_usage : {
            name: 'disk usage',
            text: 'Visualize the size of the folders on<br> your hard drive so you can tell at<br> a glance which folders are taking<br> up the most space.'},
        smart_uninstaller : {
            name: 'smart uninstaller',
            text: 'Prevent future junk by making sure that you&#39re not just sweeping old applications under the rug when you are trying to delete them.'},
        data_encryptor : {
            name: 'data encryptor',
            text: 'Make your restricted files absolutely invisible to anyone without the right password, protecting even your most sensitive information.'},
        default_apps : {
            name: 'default apps',
            text: 'The easiest way to define which application will open each file type.'},
        shredder : {
            name: 'shredder',
            text: 'Securely delete files and folders that you don&#39t ever want to be recovered.'},
        files_finder : {
            name: 'files finder',
            text: 'Quickly search for and find any lost or misplaced file, even if you don&#39t know in which folder it is located.'},
        login_items : {
            name: 'login items',
            text: 'Take control of how fast your Mac boots up by deciding which applications launch every time you start it'},
        memory_cleaner : {
            name: 'memory cleaner',
            text: 'Automatically optimizes and monitors<br> your Mac’s RAM memory while you<br> are performing your daily tasks.'}

    }

    $('path').click(function (e) {
        
        var el_class = $(this).attr("class").slice(3);
        e.preventDefault();
        $('.img_wrapper img').removeClass().addClass(el_class);
        var tool_description = Tools_descriptions[el_class].text;
        var size = $('.' + el_class).css('width');
        $('.img_wrapper').css('width',size);
        $('.tool_name p').text(Tools_descriptions[el_class].name);
        $('.tool_description p').html(tool_description);
        
        });
  
});
