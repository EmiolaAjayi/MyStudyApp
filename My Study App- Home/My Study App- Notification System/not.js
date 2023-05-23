//Subscribe to push service
navigator.serviceWorker.getRegistration().then(reg => {
    reg.pushManager.subscribe({
        userVisibleOnly: true 
    }). then( sub => {
        //send sub.toJSON() to server
    });
});

//Subscription obj
{
    'endpoint': 'https://fcm.googleapis.com/fcm/send/fLskkp...',
    'keys': {
        'p256dh': 'BLc4xRzK1KORWlbdg'
    }
}