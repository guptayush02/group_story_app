import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  tabContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  menuTab: {
    flexDirection: "row",
    justifyContent: "center",
    zIndex: 999,
    flex: 1,
    // borderTopColor: "#E5E5E5",
    // borderTopWidth: 1,
    backgroundColor: "black",
    marginTop: 1,
    // borderTopWidth: 0.5,
  },
  menuContainer: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: "#494949",
    // position: 'absolute',
    // bottom: -10,
    ...Platform.select({
      ios: {
        shadowColor: "#000019",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.24,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  menuOption: {
    flexDirection: "row",
    paddingVertical: 14,
    alignItems: "center",
  },
  menuText: {
    color: "#FFFFFF",
    marginLeft: 10,
    fontSize: 14,
  },
  menuImage: {
    height: 30,
    width: 30,
    tintColor:'white'
  },
  moreTabImage: {
    width: 32.5,
    height: 39,
    marginTop: 10,
  }
});
