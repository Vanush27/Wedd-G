// Импортируем скрипты (версии должны совпадать с вашими)
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBhy1v_--XUoGMND7SgOlsEhWQZufGJwAA",
  authDomain: "wedding-e3f7b.firebaseapp.com",
  databaseURL: "https://wedding-e3f7b-default-rtdb.firebaseio.com",
  projectId: "wedding-e3f7b",
  storageBucket: "wedding-e3f7b.firebasestorage.app",
  messagingSenderId: "68395348813",
  appId: "1:68395348813:web:3a58d6cbaf9efef8a5fd04",
  measurementId: "G-BF3VF83P7P"
});

const messaging = firebase.messaging();





// Обработка фоновых сообщений (когда приложение закрыто или неактивно)
messaging.onBackgroundMessage((payload) => {
  console.log('Background message:', payload);
  
  // Получаем номер стола из уведомления
  let tableNumber = '';
  if (payload.data?.tableNumber) {
    tableNumber = payload.data.tableNumber;
  } else {
    // Ищем цифры в тексте уведомления
    const numbers = payload.notification?.body?.match(/\d+/);
    if (numbers) {
      tableNumber = numbers[0];
    }
  }
  
  const notificationTitle = payload.notification?.title || 'Սեղան է նշանակվել';
  const notificationBody = payload.notification?.body || '';
  
  // Показываем уведомление
  const notificationOptions = {
    body: notificationBody,
    icon: '../src/assets/icons/location.svg',
    badge: '/badge.png',
    tag: 'table-notification',
    renotify: true,
    requireInteraction: true, // Уведомление не исчезает автоматически
    data: {
      tableNumber: tableNumber,
      url: '/', // URL для открытия при клике
      timestamp: Date.now()
    },
    actions: [
      {
        action: 'open',
        title: '📱 Открыть'
      },
      {
        action: 'close',
        title: '❌ Закрыть'
      }
    ]
  };
  
  self.registration.showNotification(notificationTitle, notificationOptions);
});

// Обработка кликов по уведомлению
// self.addEventListener('notificationclick', (event) => {
//   event.notification.close();
  
//   const tableNumber = event.notification.data?.tableNumber;
  
//   // Открываем или фокусируемся на вкладке
//   event.waitUntil(
//     clients.matchAll({ type: 'window', includeUncontrolled: true })
//       .then(windowClients => {
//         // Если есть открытое окно, фокусируемся на нем
//         for (let client of windowClients) {
//           if (client.url.includes(self.location.origin) && 'focus' in client) {
//             // Отправляем сообщение в окно с номером стола
//             client.postMessage({
//               type: 'TABLE_NUMBER',
//               tableNumber: tableNumber,
//               payload: event.notification.data
//             });
//             return client.focus();
//           }
//         }
//         // Если нет открытого окна, открываем новое
//         if (clients.openWindow) {
//           return clients.openWindow('/');
//         }
//       })
//   );
// });

// Обработка действий в уведомлении
self.addEventListener('notificationactionclick', (event) => {
  event.notification.close();
  
  if (event.action === 'open') {
    event.waitUntil(
      clients.matchAll({ type: 'window', includeUncontrolled: true })
        .then(windowClients => {
          for (let client of windowClients) {
            if (client.url.includes(self.location.origin) && 'focus' in client) {
              client.postMessage({
                type: 'TABLE_NUMBER',
                tableNumber: event.notification.data?.tableNumber
              });
              return client.focus();
            }
          }
          if (clients.openWindow) {
            return clients.openWindow('/');
          }
        })
    );
  }
});

// Обработка сообщений от клиента
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'GET_TOKEN') {
    // Можно отправить токен обратно, если нужно
    console.log('Получен запрос токена от клиента');
  }
});

// В обработчике notificationclick замените открытие окна:

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  const tableNumber = event.notification.data?.tableNumber;
  
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then(windowClients => {
        // Проверяем, открыта ли уже страница с уведомлением
        for (let client of windowClients) {
          if (client.url.includes('/table-notification.html') && 'focus' in client) {
            return client.focus();
          }
        }
        
        // Открываем страницу с номером стола
        if (clients.openWindow) {
          return clients.openWindow(`/table-notification.html?table=${tableNumber}`);
        }
      })
  );
});
