import React from 'react';
import {Text, StyleSheet,View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Search = () => {
    return (
        <SafeAreaView>
            <Text style={{color:"black"}}>Veuillez noter que la qualité de la conversion peut varier en fonction de la complexité du document PDF. De plus, assurez-vous de respecter les droits d'auteur et la confidentialité lors de l'utilisation de ces services.</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

})

export default Search;
