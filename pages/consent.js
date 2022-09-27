import { UMP } from 'react-native-ad-consent'

const {
  consentStatus,
  isConsentFormAvailable,
  isRequestLocationInEeaOrUnknown,
} = await UMP.requestConsentInfoUpdate()

if (
  isRequestLocationInEeaOrUnknown &&
  isConsentFormAvailable &&
  consentStatus === UMP.CONSENT_STATUS.REQUIRED
) {
  const { consentStatus } = await UMP.showConsentForm()
}
