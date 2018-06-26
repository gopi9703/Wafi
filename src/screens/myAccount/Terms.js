import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';



class Terms extends Component {
    render() {
        return (
            <View style={styles.bodyBg}>
                <ScrollView>
                    <View style={styles.textContainer}>
                        <Text style={styles.TitleHead}>Terms &amp; Conditions</Text>
                        <Text style={styles.textPara}>
                            This is a legally binding agreement hereinafter referred to as the "License Agreement", between You and Gulfart International LLC, the owner/ provider (herein after referred to as the App Provider) of the Waifdeals application (herein after referred to as the Licensed Application).By downloading, accessing, browsing, subscribing or otherwise using this Licensed Application, You agree to be unconditionally bound by and to follow the terms and conditions of this License Agreement, as amended from time to time by the App Provider in its sole discretion without further notice. Updates to this License Agreement, will be accessible through the Licensed Application. You are therefore encouraged to review the terms and conditions of this License Agreement regularly. You agree, your continued use of the Licensed Application after any such changes, confirms your acceptance of the revised License Agreement.
                        </Text>
                        <Text style={styles.textPara}>
                            The Licensed Application has been designed and developed to make your shopping experience easy and fun with the objective of saving you money and by providing you information to make better shopping decisions. The many features include browsing local flyers; create shopping list and finding your favorite offers for most savings every week. We are motivated by our goal to provide you with the most interactive dynamic shopping experience.
                        </Text>
                        <Text style={styles.TitleHead}>License and Scope of Service</Text>
                        <Text style={styles.textPara}>The Licensed Application provides an aggregated retail promotions platform of products supplied by third party vendors. The Licensed Application provides you with the option to search offers before proceeding to instore purchases. The Licensed Application is at present, purely a search tool, and does not provide online purchase functionality.</Text>
                        <Text style={styles.textPara}>You are granted a limited, non-exclusive, non-transferable, non-sub licensable license to use the Licensed Application for personal and/or non-commercial use subject to this License Agreement.</Text>
                        <Text style={styles.textPara}>You may not rent, lease, lend, sell, publish, broadcast, redistribute or sublicense the Licensed Application. You may not copy, duplicate, decompile, modify, reverse engineer, disassemble, attempt to derive the source code of, modify, or create derivative works of the Licensed Application and/or any updates, or any part thereof. Any unauthorized use may also violate applicable laws, copyright and trademark laws. Nothing in this License Agreement shall be construed as conferring any license to intellectual property rights, implied or otherwise. The License is revocable at any time without notice, with or without cause.
                        </Text>
                        <Text style={styles.textPara}>The terms of this License Agreement will govern any upgrades provided by App Provider that replace and/or supplement the Licensed Application, unless accompanied by a separate license in which case the terms of that license will govern.</Text>
                        <Text style={styles.TitleHead}>Copyrights, Trademark rights and Content</Text>
                        <Text style={styles.textPara}>You hereby accept and acknowledge that the Licensed Application, the service and all related content are subject to copyright and trademark rights whether explicitly stated or implied. Any reproduction or use of the App Provider copyright material other than personal use requires the explicit conditional written permission of the App Provider. Waifdeals logo, code, Waifdeals.com and other names of products/services referenced in these terms and conditions are trademarks and registered copyrights of the App Provider. You must not use any of the Copyright or Trademark connected with App Provider’s product/service in connection with any service or product not offered by us, or in any manner that may reflect negatively on us, our partners or associates.</Text>
                        <Text style={styles.textPara}>You represent and warrant that any comments, suggestions or feedback you provide, disclose or submit to the App Provider is entirely without obligation or restriction of any intellectual property, copyright or trademark rights and will not cause any person harm, injury or contain any harmful or unlawful content.</Text>
                        <Text style={styles.textPara}>
                            The Licensed Application contains proprietary material, images, links, text, pictures, logos, clips, trade names, domain names, service names of the App Provider or other third parties. All such content is provided on a "as –is" basis and you agree the App Provider or App Provider associates are not responsible for the accuracy or completeness of such content.
                        </Text>
                        <Text style={styles.textPara}>It is our intention to ensure all content is decent, non-violent and appropriate. However, should you encounter such content that you deem as indecent, violent or inappropriate please do inform us. You acknowledge and agree that the App provider or third party content provider shall have no liability to you for any such Application Content.</Text>
                        <Text style={styles.textPara}>Nothing in this License Agreement shall be interpreted to confer to You any title or ownership rights to the Licensed Application or any copyrights, trademark or intellectual property rights thereof.</Text>
                        <Text style={styles.textPara}>This clause (Copyrights, Trademark rights and Content) shall survive the termination of this License Agreement.</Text>

                        <Text style={styles.TitleHead}>Registration:</Text>
                        <Text style={styles.textPara}>You will be required to register with us in order to make use of certain functionality/ features of the Licensed Application. While doing so you must provide us with complete and accurate information, safeguard your user name and password, permit us to assume that anyone using Your user name is either You or a person authorized by You to act on your behalf. You may cancel your registration at any time by informing us at support@waifdeals.com. We reserve the right to discontinue Your registration at our sole and absolute discretion without any notice to You.</Text>
                        <Text style={styles.TitleHead}>Use of Data</Text>
                        <Text style={styles.textPara}>You Acknowledge and agree that the App Provider may collect and use technical data and other related information about your device, browser, system and application software including but not limited to your usage data, shopping behavior etc. and that the App Provider and or its partners, associates or third parties may use this data to improve its product, service offerings and offers. The data used for analytical services or provided to third parties will be anonymous and not contain any personal information.</Text>
                        <Text style={styles.TitleHead}>Privacy Policy</Text>
                        <Text style={styles.textPara}>The collection, use of your Personal Information by the App Provider is governed by its Privacy Policy, available at http://Waifdeals.com/privacy-policy</Text>
                        <Text style={styles.TitleHead}>Termination &amp; Modification</Text>
                        <Text style={styles.textPara}>Updates to this License Agreement will be made without notice and will be accessible through the Licensed Application. You are therefore encouraged to review the terms and conditions of this License Agreement regularly.</Text>
                        <Text style={styles.textPara}>The License is effective until terminated by the App Provider or You. On termination, you shall cease to use the Licensed Application and destroy all copies of the Licensed Application or any information downloaded or obtained from the Licensed Application.</Text>
                        <Text style={styles.TitleHead}>Your Representation and Warranties</Text>
                        <Text style={styles.textPara}>1. You will not use the Licensed Application or service for anything that is unlawful or prohibited by the terms and conditions;</Text>
                        <Text style={styles.textPara}>2. You will not violate or attempt to violate the security of the Licensed Application or interfere or cause to interfere with the proper working of the Licensed Application;</Text>
                        <Text style={styles.textPara}>3. All material or content that You post is true, accurate and not owned or confidential by/to any other person;</Text>
                        <Text style={styles.textPara}>4. You agree that the use of the Licensed Application is at your sole risk and that the Licensed Application as well as the content is provided to You on an "As is" basis</Text>
                        <Text style={styles.textPara}>5. You agree that App Provider hereby disclaims all warranties and conditions, responsibilities and liabilities with respect to the Licensed Applications and or content either expressed or implied in relation to accuracy, reliability, availability, completeness, operability of the Licensed Application or its content.</Text>
                        <Text style={styles.textPara}>6. You are legally entitled to use the Licensed Application and are not impersonating another person or have provided information that is false;</Text>
                        <Text style={styles.TitleHead}>Indemnity</Text>
                        <Text style={styles.textPara}>You agree to indemnify, defend and hold harmless App Provider, our officers, employees, directors, agents, associates, contractors, subcontractors, licensors, supplier, Representatives, Content Rights holders from and against any claims, actions, demands, liabilities, damages, losses, costs and expenses including reasonable legal fees, incurred in connection with or arising in connection with the use of the Licensed Application or alleged to result from Your use of the Licenses Application or Your violation of the Licensed License Agreement, any law or the rights of such third party.</Text>
                        <Text style={styles.textPara}>This clause (Indemnity) shall survive the termination of this License Agreement.</Text>
                        <Text style={styles.TitleHead}>Limitation of Liability</Text>
                        <Text style={styles.textPara}>Notwithstanding anything contained in this License Agreement.</Text>
                        <Text style={styles.textPara}>1. The App Provider and content Rights holder will not be liable with respect to any claim arising out of the use, or inability to use the Licensed Application or in connection with this License Agreement, whether in contract or tort, strict liability or other legal or equitable theory for any, special, indirect, consequential or exemplary damage, loss of revenue, loss of good will, or anticipated profits, or loss of business.</Text>
                        <Text style={styles.textPara}>2. Under no circumstance will the App Provider and Content Rights Holder be liable from the inability to use the License Application, delay or accuracy of information provided.</Text>
                        <Text style={styles.textPara}>3. The App Provider’s total liability to You under all circumstances whether arising out of or in connection with this License Agreement, tort, strict liability or other legal or equitable theory shall be limited to US$10.</Text>
                        <Text style={styles.textPara}>This Clause (Limitation of Liability) states the entire monetary liability of the App Provider and Your sole and exclusive monetary remedy, with respect to the Licensed Application or Services provided by the App Provider and any outcome of such Services and it is clarified that the App Provider shall have no additional monetary liability with respect to any alleged or proved defects or inaccuracies in the Licensed Application or from the outcome of such Services rendered.</Text>
                        <Text style={styles.textPara}>This clause (Limitation of Liability) shall survive the termination of this License Agreement.</Text>
                        <Text style={styles.TitleHead}>Force Majeure</Text>
                        <Text style={styles.textPara}>In no event shall the App Provider be liable to the other for any delay or failure in performance or interruption of service resulting directly or indirectly from acts of God, civil or military authority, civil disturbance, war, armed conflict, hostile attacks, insurrections, riot, sabotage, blockage, embargoes, flood, earthquake, typhoon, epidemic, strikes, fire, other catastrophes, labor disturbance, adverse acts of any governmental authority, or other event, foreseeable or unforeseeable, beyond the reasonable control of the of the App Provider (including but not limited to Electric Power failure, Internet Failure, Equipment failure) claiming such delay or failure in performance ("Force Majeure").</Text>
                        <Text style={styles.TitleHead}>Governing Law</Text>
                        <Text style={styles.textPara}>This License Agreement shall be construed and enforced in accordance with, and governed by, the laws of India.</Text>
                        <Text style={styles.TitleHead}>Entire Agreement</Text>
                        <Text style={styles.textPara}>This License Agreement shall constitute the complete agreement between the Parties and supersedes all previous agreements or representations, written or oral, with respect to the subject matter described herein.</Text>
                        <Text style={styles.TitleHead}>Severability</Text>
                        <Text style={styles.textPara}>If any provision of this License Agreement is illegal or unenforceable, its invalidity shall not affect the other provisions of this License Agreement that can be given effect without the invalid provision. If any provision of this License Agreement does not comply with any law, ordinance or regulation, such provision, to the extent possible, shall be interpreted in such a manner so as to comply with such law, ordinance or regulation, or, if such interpretation is not possible, it shall be deemed to satisfy the minimum requirements thereof.</Text>
                        <Text style={styles.TitleHead}>Notices</Text>
                        <Text style={styles.textPara}>All notices, required to be sent hereunder shall be sent electronically via email to the designated address. All notices received shall be deemed effective a day after receipt.</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bodyBg: {
        backgroundColor: '#fff',
        flex: 1,

    },
    textContainer: {
        backgroundColor: '#ffffff',
        padding: 10,

    },
    TitleHead: {
        lineHeight: 25,
        color: '#282B32',
        fontSize: 18,
        fontFamily: "MyriadPro-Regular",
        paddingVertical: 10,
        paddingHorizontal: 10,
        fontWeight: 'bold',

    },
    textPara: {
        lineHeight: 22,
        color: '#282B32',
        fontSize: 15,
        fontFamily: "MyriadPro-Regular",
        paddingVertical: 10,
        paddingHorizontal: 10,
        fontWeight: 'normal',
    }
});

export default Terms;