<template>
    <v-row>
        <MediaDialog 
            @insertNewUrl="insertNewUrl"
            @closeMediaDialog="closeMediaDialog" 
            :dialog="mediaDialog"
        />
        <v-col cols="3">
            <v-btn color="primary" style="width: 100%" class="mt-2" @click="clickSendMessega">
                Send Message
            </v-btn>
            <img style="width: 100%" onerror="this.src='http://localhost:4000/media-resource/default-avatar.png'" :src="user.avatar ? user.avatar : 'http://localhost:4000/media-resource/default-avatar.png'"/>
            <v-btn color="primary" style="width: 100%" v-if="currentUser.role == 'admin'" @click="mediaDialog = true">
                Upload Avatar<v-icon small right color="white">fas fa-file-upload</v-icon>
            </v-btn>
            <v-btn color="primary" style="width: 100%" v-if="currentUser.role == 'admin'" class="mt-2" @click="clickSaveChange">
                Save Change
            </v-btn>
            <v-alert class="mt-2" dense v-if="saveAlert.message != ''" :type="saveAlert.type">{{saveAlert.message}}</v-alert>
        </v-col>
        <v-col cols="9">
            <v-row>
                <v-col cols="4">
                    <v-text-field 
                        v-model="user.full_name"
                        :disabled="currentUser.role != 'admin'"
                        label="Fullname"
                    ></v-text-field>
                </v-col>
                <v-col cols="4">
                    <v-text-field 
                        type="email"
                        v-model="user.local_email"
                        :disabled="currentUser.role != 'admin'"
                        label="Local Email"
                    ></v-text-field>
                </v-col>
                <v-col cols="4">
                    <v-combobox
                        v-model="user.role"
                        :items="['admin', 'student', 'teacher']"
                        :disabled="currentUser.role != 'admin'"
                        label="Role"
                    ></v-combobox>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="4">
                    <v-combobox
                        v-model="user.sex"
                        :items="['male', 'female']"
                        :disabled="currentUser.role != 'admin'"
                        label="Gender"
                    ></v-combobox>
                </v-col>
                <v-col cols="4">
                    <v-text-field 
                        v-model="user.work_place"
                        :disabled="currentUser.role != 'admin'"
                        label="Work Place"
                    ></v-text-field>
                </v-col>
                <v-col cols="4">
                    <v-text-field 
                        v-model="user.phone_number"
                        :disabled="currentUser.role != 'admin'"
                        label="Phone Number"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="4">
                    <DatePicker 
                        v-if="user.birthday && currentUser.role == 'admin'" 
                        :date="new Date(user.birthday).toISOString().substr(0, 10)" 
                        label="Birthday"
                    />
                </v-col>
                <v-col cols="4">
                    <v-text-field 
                        v-if="currentUser.role == 'admin'"
                        v-model="user.address"
                        label="Address"
                    ></v-text-field>
                </v-col>
                <v-col cols="4">
                    <v-text-field 
                        v-if="currentUser.role == 'admin'"
                        v-model="user.bank_id"
                        label="Bank ID"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-textarea 
                        dense outlined 
                        :disabled="currentUser.role != 'admin'"
                        v-model="user.bio" 
                        label="Biology"
                    >
                    </v-textarea>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
import MediaDialog from "../../components/MediaDialog/MediaDialog.vue"
import DatePicker from "../../components/DatePicker/DatePicker.vue"
import * as socketio from "../../plugins/socket.client"

export default {
    components: { MediaDialog, DatePicker },
    async asyncData({ params }) {
      const userId = params.user
      return { userId }
    },
    computed: {
        currentUser() {
            return {
                id: this.$store.state.user.id,
                fullname: this.$store.state.user.fullname,
                avatar: this.$store.state.user.avatar,
                role: this.$store.state.user.role,
            }
        }
    },
    data() {
        return {
            user: "",
            mediaDialog: false,
            saveAlert: {
                message: "",
                type: ""
            },
        }
    },
    async created() {
        await this.fetchUser()
    },
    methods: {
        async fetchUser() {
            const userId = this.userId
            await this.$store.dispatch("getUser", {
                userId,
                onSuccess: async data => {
                    this.user = data
                    console.log(this.user)
                },
                onError: async data => {
                    console.log('course fetch error: ', data)
                }
            })
        },
        clickClose() {
            this.$emit('closeDialog', false)
        },
        insertNewUrl(media) {
            this.user.avatar = media.url
        },
        closeMediaDialog(dialog) {
            this.mediaDialog = dialog
        },
        clickSaveChange() {
            const user = this.user
            this.$store.dispatch("updateUser", {
                data: user,
                onSuccess: async data => {
                    console.log('hello: ', data)
                    this.saveAlert.message = "User Update Success"
                    this.saveAlert.type = "success"
                    setTimeout(() => {
                        this.saveAlert.message = ""
                        this.saveAlert.type = ""
                    }, 5000)
                },
                onError: err => {
                    console.log("Course Update Error: ", err)
                    this.saveAlert.message = "User Update Fail"
                    this.saveAlert.type = "error"
                    setTimeout(() => {
                        this.saveAlert.message = ""
                        this.saveAlert.type = ""
                    }, 5000)
                }
            })
        },
        clickSendMessega() {
            socketio.sendEvent({
                type: "get_message_list",
                data: {
                    senderID: this.currentUser.id, 
                    recieverID: this.user._id
                }
            })
            this.$store.commit('chat/openChat')
            this.$store.commit('chat/setReciver', {
                id: this.user._id,
                name: this.user.full_name,
                avatar: this.user.avatar
            })
        }
    }
}
</script>

<style>

</style>