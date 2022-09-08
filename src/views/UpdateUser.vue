<template>
	<Navbar></Navbar>
	<div class="w-100 bg-light h-100 pb-md-10 pb-19">
		<Loading :active="isLoading"></Loading>
		<PersonHeader></PersonHeader>
		<div class="container w-100 pb-12 pt-12">
			<div class="d-md-flex d-block">
				<ul
					class="d-md-block d-flex"
					style="
						min-width: 240px;
						background-color: #f9f9f9;
						border-radius: 4px 0 0 4px;
					"
				>
					<li class="w-md-50">
						<button
							to="/updateUser"
							:class="{ 'is-active-profile': link === 'updateUser' }"
							@click="link = 'updateUser'"
							class="
								w-100
								text-dark-800
								p-3
								rounded-0
								text-start
								border-none
								text-md-start text-center
							"
							type="button"
						>
							<span class="material-icons me-3"> account_circle </span>
							編輯個人檔案
						</button>
					</li>
					<li class="w-md-50">
						<button
							type="button"
							:class="{ 'is-active-profile': link === 'updatePwd' }"
							@click="link = 'updatePwd'"
							class="
								w-100
								text-dark-800
								p-3
								rounded-0
								text-start
								border-none
								text-md-start text-center
							"
						>
							<span class="material-icons me-3"> lock </span>

							重設密碼
						</button>
					</li>
				</ul>
				<div
					class="w-100 py-6 px-8 shadow-lg bg-white"
					style="border-radius: 0 4px 4px 0"
					v-if="link === 'updateUser'"
				>
					<p class="text-primary fw-bold fs-2xl fs-md-lg mb-4">
						編輯個人檔案
					</p>
					<div class="w-100 t-border d-block mb-5"></div>
					<div class="border-bottom mb-6 pb-8">
						<div
							class="
								d-flex
								flex-column
								justify-content-center
								align-items-center
							"
						>
							<div class="mb-6">
								<div class="rounded-circle">
									<img
										:src="profile.avatar"
										alt=""
										class="rounded-circle"
										style="width: 128px; height: 128px"
									/>
								</div>
							</div>
							<label
								for="uploadLoadingBtn"
								class="
									position-relative
									d-inline-flex
									justify-content-center
									rounded
									align-items-center
									py-2
									px-4
									btn--secondary
								"
							>
								<input
									id="uploadLoadingBtn"
									type="file"
									class="position-absolute opacity-0 w-100"
									ref="fileInput"
									@change="uploadFile"
									style="left: 0; cursor: pointer"
								/>
								<span class="material-icons me-1"> file_upload </span>
								<p>上傳大頭貼</p>
							</label>
						</div>
					</div>
					<div class="border-bottom mb-6 pb-8">
						<div class="d-md-flex align-items-md-center d-block">
							<p class="fs-md fs-md-sm mb-md-0 mb-2" style="width: 112px">
								暱稱
							</p>
							<div
								class="d-flex align-items-center w-100"
								style="max-width: 420px"
							>
								<input
									type="text"
									class="form-control w-100"
									placeholder="請輸入暱稱"
									v-model="profile.name"
								/>
							</div>
						</div>
					</div>
					<div class="border-bottom mb-6 pb-8">
						<div class="d-md-flex align-items-md-start d-block">
							<p class="fs-md fs-md-sm mb-md-0 mb-2" style="width: 112px">
								個人簡介
							</p>
							<div
								class="d-flex align-items-center w-100"
								style="max-width: 420px"
							>
								<textarea
									rows="5"
									type="text"
									class="form-control w-100"
									v-model="profile.personalInfo"
									placeholder="請輸入個人簡介"
								></textarea>
							</div>
						</div>
					</div>

					<div class="d-flex justify-content-end">
						<button
							type="button"
							class="btn--primary d-flex align-items-center"
							@click="updateInfo"
						>
							<span class="material-icons fs-lg me-2"> edit_square </span
							>儲存變更
						</button>
					</div>
				</div>
				<div
					class="w-100 py-6 px-8 shadow-lg bg-white"
					style="border-radius: 0 4px 4px 0"
					v-else
				>
					<p class="text-primary fw-bold fs-2xl fs-md-lg mb-4">重設密碼</p>
					<div class="w-100 t-border d-block mb-5"></div>
					<div class="mb-6">
						<div class="d-md-flex align-items-md-center d-block">
							<p class="fs-md fs-md-sm mb-md-0 mb-2" style="width: 170px">
								輸入目前的密碼
							</p>
							<div
								class="d-flex align-items-center w-100"
								style="max-width: 420px"
							>
								<input
									type="password"
									v-model="password.passwordCurrent"
									class="form-control w-100 form-control-lg fs-md fs-md-sm"
									placeholder="請輸入目前的密碼"
								/>
							</div>
						</div>
					</div>
					<div class="mb-6">
						<div class="d-md-flex align-items-md-center d-block">
							<p class="fs-md fs-md-sm mb-md-0 mb-2" style="width: 170px">
								輸入新密碼
							</p>
							<div
								class="d-flex align-items-center w-100"
								style="max-width: 420px"
							>
								<input
									type="password"
									v-model="password.password"
									class="form-control w-100 form-control-lg fs-md fs-md-sm"
									placeholder="請輸入新密碼"
								/>
							</div>
						</div>
					</div>

					<div class="border-bottom mb-6 pb-8">
						<div class="d-md-flex align-items-md-center d-block">
							<p class="fs-md fs-md-sm mb-md-0 mb-2" style="width: 170px">
								確認新密碼
							</p>
							<div
								class="d-flex align-items-center w-100"
								style="max-width: 420px"
							>
								<input
									type="password"
									v-model="password.passwordConfirm"
									class="form-control w-100 form-control-lg fs-md fs-md-sm"
									placeholder="確認新密碼"
								/>
							</div>
						</div>
					</div>

					<div class="d-flex justify-content-end">
						<button
							type="button"
							class="btn--primary d-flex align-items-center"
							@click="updatePassword"
						>
							<span class="material-icons fs-lg me-2"> edit_square </span
							>儲存變更
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Navbar from "../components/Navbar.vue";
	import profileMixin from "../mixins/profileMixin";
	import PersonHeader from "../components/PersonHeader.vue";

	export default {
		data() {
			return {
				link: "updateUser",
				isLoading: false,
				password: {
					passwordCurrent: "",
					password: "",
					passwordConfirm: "",
				},
			};
		},
		components: {
			Navbar,
			PersonHeader,
		},
		methods: {
			uploadFile() {
				this.isLoading = true;
				const uploadedFile = this.$refs.fileInput.files[0];
				const formData = new FormData();
				formData.append("image", uploadedFile);

				const token = document.cookie.split(`jwt=`).pop();
				this.$http({
					method: "POST",

					url: `${process.env.VUE_APP_API}/upload`,
					headers: {
						Authorization: `Bearer ${token}`,
					},
					data: formData,
				})
					.then((res) => {
						console.log(res.data.status);
						if (res.data.status === "success") {
							this.profile.avatar = res.data.data;
							this.isLoading = false;
						}
					})
					.catch((err) => {
						this.isLoading = false;
						console.log(err);
					});
			},
			updateInfo() {
				this.isLoading = true;
				const token = document.cookie.split(`jwt=`).pop();
				this.$http({
					method: "PATCH",
					url: `${process.env.VUE_APP_API}/users/myProfile`,
					headers: {
						Authorization: `Bearer ${token}`,
					},
					data: this.profile,
				})
					.then((res) => {
						this.isLoading = false;
						this.getProfile();
						alert("更新檔案成功");
					})
					.catch((err) => {
						console.log(err);
					});
			},
			updatePassword() {
				this.isLoading = true;
				const token = document.cookie.split(`jwt=`).pop();
				this.$http({
					method: "PATCH",
					url: `${process.env.VUE_APP_API}/users/updatePassword`,
					headers: {
						Authorization: `Bearer ${token}`,
					},
					data: this.password,
				})
					.then((res) => {
						this.isLoading = false;
						alert("更新密碼成功");
						this.password = {};
					})
					.catch((err) => {
						console.log(err);
						this.isLoading = false;
						if (err.response.data.status === "Error") {
							alert(err.response.data.message);
						}
					});
			},
		},
		mixins: [profileMixin],
	};
</script>