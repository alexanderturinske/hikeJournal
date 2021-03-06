import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import CurrentHike from '../screens/CurrentHike';
import GearNavigator from './GearNavigator';
import HikeSettings from '../screens/HikeSettings';
import MapScreen from '../screens/MapScreen';

const HikeNavigator = createBottomTabNavigator({
  currentHike: {
    screen: CurrentHike
  },
  gear: {
    screen: GearNavigator
  },
  map: {
    screen: MapScreen
  },
  settings: {
    screen: HikeSettings
  }
});

const styles = StyleSheet.create({});
export default HikeNavigator;
