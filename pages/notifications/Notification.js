import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import COLORS from '../const/Colors';



const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0); // State to track the count of unread notifications

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(https);
        setNotifications(response.data);

        // Calculate the unread count by filtering unread notifications
        const unreadNotifications = response.data.filter((notification) => !notification.read);
        setUnreadCount(unreadNotifications.length);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  const clearNotifications = async () => {
    try {
      await axios.delete(https);
      setNotifications([]);
      setUnreadCount(0); 
    } catch (error) {
      console.error('Error clearing notifications:', error);
    }
  };

  const markAsRead = async (notificationId) => {
    try {
      await axios.put(https);
      
      // Update notifications and unread count when marking a notification as read
      const updatedNotifications = notifications.map((notification) => {
        if (notification.id === notificationId) {
          return { ...notification, read: true };
        }
        return notification;
      });
      setNotifications(updatedNotifications);

      const unreadNotifications = updatedNotifications.filter((notification) => !notification.read);
      setUnreadCount(unreadNotifications.length);
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={clearNotifications}>
        <Text style={styles.clearAllButtonText}>Clear All</Text>
      </TouchableOpacity>
      <Text style={styles.header}>Notifications ({unreadCount})</Text>
      {notifications.length > 0 ? (
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.notificationItem,
                { backgroundColor: item.read ? 'lightgray' : 'white' }, // Change background color for read notifications
              ]}
              onPress={() => markAsRead(item.id)}
            >
              {item.messages.map((message, index) => (
                <View key={index} style={styles.messageContainer}>
                  <Text style={[styles.notificationIcon, { color: message.color }]}>
                    {message.icon}
                  </Text>
                  <Text style={[styles.notificationText, { color: message.color }]}>
                    {message.content}
                  </Text>
                </View>
              ))}
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text>No notifications available.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:COLORS.green,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  notificationItem: {
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  notificationIcon: {
    fontSize: 24,
    marginRight: 8,
  },
  notificationText: {
    flex: 1,
    fontSize: 16,
  },
  clearAllButtonText: {
    color: 'brown',
    fontSize: 16,
    textAlign: 'center',
  },


  
});

export default Notification;